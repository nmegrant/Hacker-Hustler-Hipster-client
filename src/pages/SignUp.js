import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpThunkCreator } from "../store/user/actions";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    // Add in alert for this later
    if (password !== confirmPassword) {
      console.log("Password don't match");
    }
    dispatch(signUpThunkCreator({ name, email, password, role }));
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRole("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicRole">
          <Form.Label>Team Role</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                name="Role"
                label="Hacker"
                type={type}
                id={`inline-${type}-1`}
                value="Hacker"
                onChange={(event) => setRole(event.target.value)}
              />
              <Form.Check
                name="Role"
                inline
                label="Hustler"
                type={type}
                id={`inline-${type}-2`}
                value="Hustler"
                onChange={(event) => setRole(event.target.value)}
              />
              <Form.Check
                name="Role"
                inline
                label="Hipster"
                type={type}
                id={`inline-${type}-3`}
                value="Hipster"
                onChange={(event) => setRole(event.target.value)}
              />
            </div>
          ))}
        </Form.Group>
        <Button type="submit" onClick={submitForm}>
          Sign Up!
        </Button>
      </Form>
      <p>
        Already a member? <Link to="/login">Log in</Link> here.
      </p>
    </Container>
  );
}
