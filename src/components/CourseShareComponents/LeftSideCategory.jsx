import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import './css/leftSide.css';

const LeftSideCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://conquer-programming-server.vercel.app/courseCategory")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="mt-5">
      {category.map((perItem) => (
        <ListGroup key={perItem.id} className='mb-3 text-center'>
          <ListGroup.Item action variant="light" className="fw-semibold shadow-md">
           <span className="list"><Link to={`/courseDetails/${perItem.id}`}>{perItem.category_name}</Link></span>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
};

export default LeftSideCategory;
