import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const NavBar = () => {
  const {user} = useContext(AuthContext);
  
  return (
    <nav className="navbar navbar-expand-lg bg-light p-3 shadow-lg">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ConQuer ProgrAmming
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/courses" title="Courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/blog" title="Blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/faq"
                title="Self-Assessment Questionnaire"
              >
                SAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/login" title="LogIn">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
