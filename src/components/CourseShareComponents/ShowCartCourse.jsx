import React from "react";

const ShowCartCourse = ({ cartCourse }) => {
  const { img, courseDuration, courseName, level, rating, price } = cartCourse;
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{courseName}</h5>
              <p className="card-text">
                <p className="m-0">Price : {price}</p>
                <p className="m-0">Level : {level}</p>
                <p className="m-0">Course Duration : {courseDuration}</p>
                <p className="m-0">Course Rating : {rating}</p>
              </p>
              <button className="btn btn-primary m-0">BUY COURSE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCartCourse;
