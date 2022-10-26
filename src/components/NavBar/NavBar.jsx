import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import Image from 'react-bootstrap/Image';
import { FaMoon, FaSun,FaDev } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const {user,userLogOut} = useContext(AuthContext);
  const [toggle , setToggle] = useState(false);

  const handlerToggle = () => {
    setToggle(!toggle)
  }

  const handlerOut = () => {
    userLogOut()
    .then(() => {

    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light p-3 shadow-lg">
      <div className="container">
        <Link className="navbar-brand fw-semibold" to="/">
         <span className="fs-2 "><FaDev></FaDev></span> ConQuer.Dev
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
              <Link className="nav-link fw-semibold" to="/home" title="Home">
                Home
              </Link>
            </li>
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

           <span onClick={handlerToggle}>
           {
              toggle ? <li className="nav-item">
              <span title="Dark Mood" className="nav-link fw-semibold">
              <FaMoon ></FaMoon>
              </span>
            </li> :
              <li className="nav-item">
              <span title="Might Mood"  className="nav-link fw-semibold">
              <FaSun ></FaSun>
              </span>
            </li>
            }
           </span>

            
            

            <li className="nav-item">
              {
               user?.photoURL ? <div className="d-flex">
               <Image title={user.displayName} style={{height : '40px'}} roundedCircle className="ms-3 me-3" src={user.photoURL} alt="" /> 
               <li className="nav-item">
              <Link onClick={handlerOut} className="nav-link fw-semibold" title="Log Out">
                Log Out
              </Link>
            </li>
               </div>
               : 
               <Link className="nav-link fw-semibold" to="/login" title="LogIn">
                Log In
              </Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
