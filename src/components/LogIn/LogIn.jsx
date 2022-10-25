import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="w-50 mx-auto mt-5">
      <h2 className="text-center text-success fw-bold">Log In</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
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
      <div className="mt-3">
        <p>
          <small>
            New This Site.<Link to="/signUp">Sign Up</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
