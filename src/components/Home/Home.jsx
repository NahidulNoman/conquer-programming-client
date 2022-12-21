import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../asset/courses.png";

const Home = () => {
  return (
    // <div className="container mt-5">
    //   {" "}
    //   <h2 className="text-primary fw-bold">Let's Conquer Programming...</h2>
    //   <p className="text-dark fw-semibold opacity-75">
    //     Computer programming is the process of performing a particular
    //     computation (or more generally, <br /> accomplishing a specific
    //     computing <br />
    //     result), usually by designing and building an executable computer
    //     program.
    //   </p>
    // <Link to="/courses">
    //   {" "}
    //   <button type="button" className="btn btn-outline-success fw-semibold">
    //     Go To Courses <FaArrowRight></FaArrowRight>
    //   </button>
    // </Link>{" "}
    // </div>
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm={12} lg={6}>
          <div className="mt-5">
            <h2 className="fw-bold fs-1">Learn without limits</h2>
            <p className="fw-semibold">
              Start, switch, or advance your career with more than 5,400
              courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
            <Link to="/courses">
              {" "}
              <button
                type="button"
                className="btn btn-outline-success fw-semibold"
              >
                Go To Courses <FaArrowRight></FaArrowRight>
              </button>
            </Link>{" "}
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <img src={banner} className="img-fluid me-5" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
