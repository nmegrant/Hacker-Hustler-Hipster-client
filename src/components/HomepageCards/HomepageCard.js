import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import "./HomepageCards.css";

export default function HomepageCard(props) {
  return (
    <Card
      style={{ width: "250px", margin: "20px" }}
      border="info"
      className="rounded mb-0"
      className="zoomie"
    >
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
        <Button variant="outline-info">
          <Link
            to={`/homepages/${props.homepageId}`}
            style={{ color: "#6610f2" }}
          >
            Show me more
          </Link>
        </Button>
      </Card.Footer>
    </Card>
  );
}
