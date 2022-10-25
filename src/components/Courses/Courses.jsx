import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Courses = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            {user.displayName}
        </div>
    );
};

export default Courses;