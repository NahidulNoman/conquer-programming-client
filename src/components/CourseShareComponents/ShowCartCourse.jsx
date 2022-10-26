import React from "react";
import { Link } from "react-router-dom";
import "./css/cart.css";

const ShowCartCourse = ({ cartCourse }) => {
  const { image, courseDuration, courseName, level, id, price } = cartCourse;

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold cartName">{courseName}</h5>
              <p className="card-text mb-2">
                <p className="m-0 fw-bold opacity-75">
                  Price : <span className="dam">${price}</span>
                </p>
                <p className="m-0 fw-bold opacity-75">
                  Level : <span className="level">{level}</span>
                </p>
                <p className="m-0 fw-bold opacity-75">
                  Course Duration :{" "}
                  <span className="duration">{courseDuration}</span>
                </p>
              </p>
              <Link to={`/courseDetails/${id}`}>
                <button
                  type="button"
                  className="btn btn-outline-secondary m-0 fw-semibold"
                >
                  BUY COURSE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCartCourse;
