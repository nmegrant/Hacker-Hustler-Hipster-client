import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function IdeaCard(props) {
  function deleteIdea(event) {
    event.preventDefault();
    console.log(props.ideaData.id);
  }

  return (
    <Card style={{ width: "200px", margin: "20px" }} border="info">
      <Card.Body>
        <Card.Title>{props.ideaData.title}</Card.Title>
        <Card.Text>{props.ideaData.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="danger" onClick={deleteIdea}>
          Delete This Idea
        </Button>
      </Card.Footer>
    </Card>
  );
}
