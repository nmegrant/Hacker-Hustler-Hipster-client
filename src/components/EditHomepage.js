import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

export default function EditHomepage() {
  const [byline, setByline] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Form.Group controlId="formGroupByline">
          <Form.Label>Catchy Byline</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a phrase to catch people's attention!"
            value={byline}
            onChange={(event) => setByline(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formGroupProjectsandExpereince">
          <Form.Label>Projects and Expereince</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Tell everyone about past projects and professional successes"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formGroupBio">
          <Form.Label>More about you</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="More about you! What makes you a great teammate?"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" onClick={submitForm}>
          Update Information
        </Button>
      </Form>
    </Container>
  );
}
