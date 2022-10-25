import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const LogIn = () => {
  const [errors, setErrors] = useState("");
  const {signInUser,withGoogle,withGitHub} = useContext(AuthContext);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email,password)
    .then(result => {
      setErrors('')
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      const errorMessage = error.message;
      setErrors(errorMessage)
      console.log(error)
    })
  };
  // sign is with google
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
    <div className="w-50 mx-auto mt-5">
      <h2 className="text-center text-success fw-bold">Log In</h2>
      <p className="mt-3 text-center text-danger">
        <small>{errors}</small>
      </p>
      <Form onSubmit={handlerSubmit}>
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
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <div className="mt-3 d-flex">
        <p className="me-3">
          <small>
            New This Site.<Link to="/signUp">Sign Up</Link>
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

export default LogIn;
