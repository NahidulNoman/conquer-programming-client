import React from 'react';
import LeftSideCategory from './LeftSideCategory';
import RightSideDetails from './RightSideDetails';

const Courses = () => {
    return (
       <div className='container'>
         <div className='row flex-column flex-lg-row'>
            <div className='col-lg-4 col-sm-12'>
                <LeftSideCategory></LeftSideCategory>
            </div>
            <div className='col-lg-8 col-sm-12'>
                <RightSideDetails></RightSideDetails>
            </div>
        </div>
       </div>
    );
};

export default Courses;