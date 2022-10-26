import React from 'react';
import Lottie from "lottie-react";
import learn from '../asset/62404-academic-hut-banner.json';

const Home = () => {
    return (
        <div className='h-25 mt-5 w-25'>
            <Lottie animationData={learn} loop={true} />
        </div>
    );
};

export default Home;