import React from "react";

import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

export default function MyHomepage(props) {
  return (
    <Container as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h1>{props.myInfo.user ? props.myInfo.user.name : null}</h1>
      <h2>{props.myInfo.user ? props.myInfo.user.role : null}</h2>
      <h5>
        Looking for
        {props.myInfo.idea
          ? " talent to work on my idea!"
          : " an idea to work on!"}
      </h5>
      <h4>{props.myInfo.byline}</h4>
      <h3>Located in {props.myInfo.location}</h3>
      <h5>Check out these websites to see some of my skills</h5>
      <Container>
        <ListGroup horizontal style={{ flexWrap: "wrap" }}>
          {props.myInfo.websites
            ? props.myInfo.websites.map((website) => {
                return (
                  <ListGroup.Item key={website.id}>
                    {website.url}
                  </ListGroup.Item>
                );
              })
            : null}
        </ListGroup>
      </Container>
      <h4>Skills</h4>
      {props.myInfo.user
        ? props.myInfo.user.tags.map((tag) => {
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
