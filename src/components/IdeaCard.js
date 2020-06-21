import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Draggable from "react-draggable";

import { useDispatch } from "react-redux";
import { deleteIdeaThunkCreator } from "../store/ideas/actions";

export default function IdeaCard(props) {
  const dispatch = useDispatch();

  function deleteIdea(event) {
    event.preventDefault();
    dispatch(deleteIdeaThunkCreator(props.ideaData.id));
  }

  return (
    <Draggable>
      <Card
        style={{ width: "200px", margin: "20px" }}
        border="info"
        className="rounded mb-0"
      >
        <Card.Body>
          <Card.Title>{props.ideaData.title}</Card.Title>
          <Card.Text>{props.ideaData.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={deleteIdea}>
            Delete Idea
          </Button>
        </Card.Footer>
      </Card>
    </Draggable>
  );
}
