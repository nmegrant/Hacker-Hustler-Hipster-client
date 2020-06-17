import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function IdeaCard(props) {
  console.log(props.ideaData);
  return (
    <Card style={{ width: "200px", margin: "20px" }} border="info">
      <Card.Body>
        <Card.Title>{props.ideaData.title}</Card.Title>
        <Card.Text>{props.ideaData.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button>Delete This Idea</Button>
      </Card.Footer>
    </Card>
  );
}
