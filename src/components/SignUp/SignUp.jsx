import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-50 mx-auto mt-5">
      <h2 className="text-center text-success fw-bold">Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name="photoUrl"
            type="email"
            placeholder="Enter photo url"
          />
        </Form.Group>
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
          Sign Up
        </Button>
      </Form>
      <div className="mt-3">
        <p>
          <small>
            Have a Account.<Link to="/login">Log In</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
