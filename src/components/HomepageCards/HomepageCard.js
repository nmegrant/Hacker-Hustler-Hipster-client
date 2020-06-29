import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { selectMode } from "../../store/user/selectors";

import "./HomepageCards.css";

export default function HomepageCard(props) {
  const mode = useSelector(selectMode());
  const colorScheme = mode ? ["#222", "#FFF"] : ["#FFF", "#222"];
  return (
    <Card
      style={{
        width: "250px",
        margin: "20px",
        background: colorScheme[0],
        color: colorScheme[1],
      }}
      border="info"
      className="rounded mb-0 zoomie"
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
