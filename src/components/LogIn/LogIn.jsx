import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [errors, setErrors] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <h2 className="text-center text-success fw-bold">Log In</h2>
      <p className="mt-3 text-center text-danger">
        <small></small>
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
            <small>
              Log In with <Link>GooGle</Link>
            </small>
          </p>
          <p>
            <small>
              Log In with <Link>GitHub</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
