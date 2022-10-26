import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkOut = useLoaderData();
    // console.log(checkOut);
    return (
        <div>
            <h1 className='text-center m-5'>{checkOut.courseName}</h1>
        </div>
    );
};

export default CheckOut;