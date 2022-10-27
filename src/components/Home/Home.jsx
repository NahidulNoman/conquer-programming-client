import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      {" "}
      <h2 className="text-primary fw-bold">Let's Conquer Programming...</h2>
      <p className="text-dark fw-semibold opacity-75">
        Computer programming is the process of performing a particular
        computation (or more generally, <br /> accomplishing a specific
        computing <br />
        result), usually by designing and building an executable computer
        program.
      </p>
      <Link to="/courses">
        {" "}
        <button type="button" className="btn btn-outline-success fw-semibold">
          Go To Courses <FaArrowRight></FaArrowRight>
        </button>
      </Link>{" "}
    </div>
  );
};

export default Home;
