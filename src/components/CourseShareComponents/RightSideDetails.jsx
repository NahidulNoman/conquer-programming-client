import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowCartCourse from './ShowCartCourse';

const RightSideDetails = () => {
    const [course , setCourse] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/details')
        .then(res => res.json())
        .then(data => setCourse(data))
    } ,[])

    return (
        <div className='mt-5'>
            {
                course.map(cartCourse => <ShowCartCourse
                key={cartCourse.id}
                cartCourse={cartCourse}
                ></ShowCartCourse>)
            }
        </div>
    );
};

export default RightSideDetails;