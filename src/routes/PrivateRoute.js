import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='w-75 mx-auto mt-5'>
            <Spinner animation="border" variant="success" />
        </div>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate> 
};

export default PrivateRoute;