import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IdeaCard from "./IdeaCard";
import { fetchIdeasThunkCreator } from "../store/ideas/actions";
import { selectIdeas } from "../store/ideas/selector";
import { addNewIdeaThunkCreator } from "../store/ideas/actions";

import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Ideas() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hacker, setHacker] = useState(false);
  const [hipster, setHipster] = useState(false);
  const [hustler, setHustler] = useState(false);

  const ideas = useSelector(selectIdeas());

  useEffect(() => {
    dispatch(fetchIdeasThunkCreator());
  }, [dispatch]);

  function submitIdea(event) {
    // event.preventDefault();
    const newIdea = { title, description, hacker, hipster, hustler };
    dispatch(addNewIdeaThunkCreator(newIdea));
    setTitle("");
    setDescription("");
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
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add a new brilliant idea!"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formGroupDescription">
          <Form.Label>Describe your idea</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Describe your new brilliant idea!"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Label>Who do you need to work on your idea?</Form.Label>
        {["checkbox"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              name="lookingFor"
              label="Hacker"
              type={type}
              id={`inline-${type}-1`}
              onChange={() => {
                setHacker(!hacker);
              }}
            />
            <Form.Check
              name="lookingFor"
              inline
              label="Hipster"
              type={type}
              id={`inline-${type}-2`}
              onChange={() => {
                setHipster(!hipster);
              }}
            />
            <Form.Check
              inline
              name="lookingFor"
              label="Hustler"
              type={type}
              id={`inline-${type}-3`}
              onChange={() => {
                setHustler(!hustler);
              }}
            />
          </div>
        ))}
        <Button
          variant="info"
          type="submit"
          onClick={submitIdea}
          style={{ margin: "5px" }}
        >
          Save Idea
        </Button>
      </Form>
    </Container>
  );
}
