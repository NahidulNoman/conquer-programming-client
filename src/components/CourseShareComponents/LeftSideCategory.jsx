import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const LeftSideCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courseCategory")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="mt-5">
      {category.map((perItem) => (
        <ListGroup key={perItem.id} className='mb-3 text-center'>
          <ListGroup.Item action variant="success" className="fw-semibold">
            {perItem.category_name}
          </ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
};

export default LeftSideCategory;
