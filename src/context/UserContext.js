import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };
    const userUpdateInfo = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser,profile)
    };
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth)
    };
    const withGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    };
    const withGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    };


    useEffect( () => {
        const unSubscript = onAuthStateChanged(auth , (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unSubscript();
        }
    } ,[])

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        signInUser,
        userLogOut,
        withGoogle,
        userUpdateInfo,
        withGitHub,
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;