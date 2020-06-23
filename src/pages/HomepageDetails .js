import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHomepageDetailsThunkCreator } from "../store/homepageDetails/actions";
import { selectHomepageDetails } from "../store/homepageDetails/selectors";

import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

export default function HomepageDetails() {
  const parameters = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectHomepageDetails());

  useEffect(() => {
    dispatch(fetchHomepageDetailsThunkCreator(parameters.homepageId));
  }, [dispatch, parameters.homepageId]);

  return (
    <Container as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h1>{details.user ? details.user.name : null}</h1>
      <span></span> <h2>{details.user ? details.user.role : null}</h2>
      <h5>
        Looking for
        {details.idea ? " talent to work on my idea!" : " an idea to work on!"}
      </h5>
      <h3>Located in {details.location}</h3>
      <h5>Check out these websites to see some of my skills</h5>
      <Container as={Row} style={{ justifyContent: "center" }}>
        <ListGroup horizontal style={{ flexWrap: "wrap" }}>
          {details.websites
            ? details.websites.map((website) => {
                return (
                  <ListGroup.Item key={website.id}>
                    <a href={`http://${website.url}`}>{website.url}</a>
                  </ListGroup.Item>
                );
              })
            : null}
        </ListGroup>
      </Container>
      <h4>Skills</h4>
      {details.user
        ? details.user.tags.map((tag) => {
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
          <Card.Text>{details.experience}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ margin: "20px" }} border="info">
        <Card.Header>A bit more about me</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>{details.bio}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
