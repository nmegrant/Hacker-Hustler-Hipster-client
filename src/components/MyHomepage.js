import React from "react";

import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

export default function MyHomepage(props) {
  return (
    <Container as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h2>{props.myInfo.user ? props.myInfo.user.role : null}</h2>
      <h5>
        Looking for
        {props.myInfo.idea
          ? " talent to work on my idea!"
          : " an idea to work on!"}
      </h5>
      <p>{props.myInfo.byline}</p>
      <h3>Located in {props.myInfo.location}</h3>
      <Container as={Row} style={{ justifyContent: "center", margin: "3px" }}>
        <ListGroup horizontal style={{ flexWrap: "wrap" }}>
          {props.myInfo.websites
            ? props.myInfo.websites.map((website, index) => {
                return (
                  <ListGroup.Item key={index}>
                    <a href={`http://${website.url}`}>{website.url}</a>
                  </ListGroup.Item>
                );
              })
            : null}
        </ListGroup>
      </Container>
      <h4>Skills</h4>
      {props.myInfo.user
        ? props.myInfo.user.tags.map((tag, index) => {
            return (
              <span key={index}>
                <Badge
                  pill
                  variant="info"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                >
                  {tag.skill}
                </Badge>
              </span>
            );
          })
        : null}
      <Card style={{ margin: "20px" }} border="info">
        <Card.Header>Projects and Experience</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>{props.myInfo.experience}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ margin: "20px" }} border="info">
        <Card.Header>A bit more about me</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>{props.myInfo.bio}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
