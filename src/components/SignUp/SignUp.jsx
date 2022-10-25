import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const SignUp = () => {
  const [errors, setErrors] = useState("");
  const {createUser,withGoogle,withGitHub,setUser} = useContext(AuthContext);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoUrl);

    createUser(email,password)
    .then(result => {
      setErrors('')
      setUser(result)
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      const errorMessage = error.message;
      setErrors(errorMessage)
      console.log(error)
    })
  };
  // sign in with google
  const handlerGoogle = () => {
    withGoogle()
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      const errorMessage = error.message;
      setErrors(errorMessage)
      console.log(error)
    })
  };
  // sign in with github 
  const handlerGithub = () => {
    withGitHub()
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      const errorMessage = error.message;
      setErrors(errorMessage)
      console.log(error)
    })
  };

  return (
    <div className="w-75 mx-auto mt-5">
      <h2 className="text-center text-success fw-bold">Sign Up</h2>
      <p className="mt-3 text-center text-danger">
        <small>{errors}</small>
      </p>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name="photoUrl"
            type="text"
            placeholder="Enter photo url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <div className="mt-3 d-flex">
        <p className="me-3">
          <small>
            Have a Account.<Link to="/login">Log In</Link>
          </small>
        </p>
        <div className="d-flex">
          <p className="me-3">
            <small onClick={handlerGoogle}>
              Log In with <Link>GooGle</Link>
            </small>
          </p>
          <p>
            <small onClick={handlerGithub}>
              Log In with <Link>GitHub</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
