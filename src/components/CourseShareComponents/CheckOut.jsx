import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkOut = useLoaderData();
  const { topic } = checkOut;
  // console.log(checkOut);
  return (
    <div className="m-5 shadow-lg p-4 bg-light rounded">
      <h1 className="fw-bold text-success text-center">
        Congratulation🎁 !! You Can Access Course🎩
      </h1>
      <h2 className="text-center fw-bold">
        Course Name :{" "}
        <span className="text-primary">{checkOut.courseName}</span>
      </h2>
      <p className="mt-3 fw-semibold">You Can Learn Those Topic : </p>
      {topic.map((read) => (
        <li key={read} className="fw-semibold opacity-75">
          {read}
        </li>
      ))}
      <Link to="/courses">
        <button type="button" class="btn btn-outline-success mt-4">
          Purchase More
        </button>
      </Link>
    </div>
  );
};

export default CheckOut;
