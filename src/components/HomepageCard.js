import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
// import Container from "react-bootstrap/Container";
// import { Row } from "react-bootstrap";

export default function HomepageCard(props) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>
          {props.name} - {props.role}
        </Card.Title>
        <Card.Text>{props.byline}</Card.Text>

        {props.tags.map((tag) => {
          return (
            <span key={tag.id}>
              <Badge
                pill
                variant="info"
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                {tag.skill}
              </Badge>
            </span>
          );
        })}
      </Card.Body>
      <Card.Footer>
        <Button>
          <Link to={`/homepages/${props.userId}`} style={{ color: "white" }}>
            Show me more
          </Link>
        </Button>
      </Card.Footer>
    </Card>
  );
}
