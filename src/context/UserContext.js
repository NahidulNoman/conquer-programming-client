import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({children}) => {
    const [user , setUser] = useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const withGoogle = () => {
        return signInWithPopup(auth,googleProvider);
    }
    const withGitHub = () => {
        return signInWithPopup(auth,githubProvider);
    }


    useEffect( () => {
        const unSubscript = onAuthStateChanged(auth , (loggedUser) => {
            setUser(loggedUser);
        })
        return () => {
            unSubscript();
        }
    } ,[])

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        withGoogle,
        withGitHub,
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;