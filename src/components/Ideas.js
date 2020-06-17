import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IdeaCard from "./IdeaCard";
import { fetchIdeasThunkCreator } from "../store/ideas/actions";
import { selectIdeas } from "../store/ideas/selector";

import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Ideas() {
  const dispatch = useDispatch();
  const [newIdea, setNewIdea] = useState("");

  const ideas = useSelector(selectIdeas());

  useEffect(() => {
    dispatch(fetchIdeasThunkCreator());
  }, [dispatch]);

  function submitIdea(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <h1>Your Brilliant Ideas</h1>
      <Container as={Row} fluid style={{ justifyContent: "center" }}>
        {ideas
          ? ideas.map((idea) => <IdeaCard key={idea.id} ideaData={idea} />)
          : null}
        {ideas.length === 0 ? (
          <h5>No ideas yet - start adding them today!</h5>
        ) : null}
      </Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Form.Group controlId="formGroupIdea">
          <Form.Label>Keep track of your ideas here!</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Add a new brilliant idea!"
            value={newIdea}
            onChange={(event) => setNewIdea(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" onClick={submitIdea}>
          Save Ideas
        </Button>
      </Form>
    </Container>
  );
}
