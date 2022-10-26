import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import { FaFileDownload, FaStar } from "react-icons/fa";
import { createRef } from "react";
import ReactToPdf from "react-to-pdf";

const CourseDetails = () => {
  const detailsCourse = useLoaderData();
  const { courseTittle, description, enrolled, rating, id, img, topic } =
    detailsCourse;

  const ref = createRef();

  return (
    <div className="container mt-5 mb-5">
      <Card className="">
        <Card.Header>
          <div className="d-flex justify-content-between align-item-center">
            <p className="fw-bold fs-4">{courseTittle}</p>
            <p className="d-flex align-items-center">
              <FaStar className="me-2 text-warning"></FaStar> {rating}
            </p>
          </div>
        </Card.Header>
        <Card.Body>
          <Image className="w-50 mb-3" src={img}></Image>
          <Card.Text>
            <div>
              <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => (
                  <span onClick={toPdf} className="">
                    <button
                      type="button"
                      className="btn btn-outline-success fw-semibold"
                    >
                      DownLoad Now <FaFileDownload></FaFileDownload>
                    </button>
                  </span>
                )}
              </ReactToPdf>
            </div>
            <p className="fw-bold opacity-75 mt-3">{description}</p>
            <h3 className="text-primary fw-semibold">
              We Have Some Topic to cover this course :{" "}
            </h3>
            {topic.map((lesson) => (
              <li key={lesson} className="fw-semibold">
                {lesson}
              </li>
            ))}
          </Card.Text>
        </Card.Body>
        <Link to={`/checkOut/${id}`}>
          <button
            type="button"
            className="btn btn-outline-primary  m-3 fw-semibold"
          >
            Get Premium Access
          </button>
        </Link>
        <Card.Footer className="text-muted">
          <p className="fw-bold">
            Total Enrolled :{" "}
            <span className="text-primary">{enrolled} person</span>
          </p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
