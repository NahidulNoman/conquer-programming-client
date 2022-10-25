import React from 'react';
import LeftSideCategory from './LeftSideCategory';
import RightSideDetails from './RightSideDetails';

const Courses = () => {
    return (
       <div className='container'>
         <div className='row'>
            <div className='col-4'>
                <LeftSideCategory></LeftSideCategory>
            </div>
            <div className='col-8'>
                <RightSideDetails></RightSideDetails>
            </div>
        </div>
       </div>
    );
};

export default Courses;