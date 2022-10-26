import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";

const CourseDetails = () => {
  const detailsCourse = useLoaderData();
  const { courseTittle, description, enrolled,courseName,id, img, topic } = detailsCourse;
  return (
    <div className="container mt-5 mb-5">
      <Card className="">
        <Card.Header>{courseName}</Card.Header>
        <Card.Body>
        <Image thumbnail className="w-50" src={img}></Image>
          <Card.Title>{courseTittle}</Card.Title>
          <Card.Text>
            {description}
            <h3>We Have Some Topic to cover this course : </h3>
            {
                topic.map(lesson => <li key={lesson}>{lesson}</li>)
            }
          </Card.Text>
        </Card.Body>
          <Link to={`/checkOut/${id}`}><Button variant="primary" className="w-25 m-3">Get Premium Access</Button></Link>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
