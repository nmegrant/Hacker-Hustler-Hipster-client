import React, { useEffect } from "react";
import FavouritesTeam from "../../components/FavouritesTeam";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHomepageDetailsThunkCreator } from "../../store/homepageDetails/actions";
import { selectHomepageDetails } from "../../store/homepageDetails/selectors";
import { selectMode } from "../../store/user/selectors";

import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";

import "./HomepageDetails.css";

export default function HomepageDetails() {
  const parameters = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectHomepageDetails());
  const mode = useSelector(selectMode());

  const colorScheme = mode ? ["#222", "#FFF"] : ["#FFF", "#222"];

  useEffect(() => {
    dispatch(fetchHomepageDetailsThunkCreator(parameters.homepageId));
  }, [dispatch, parameters.homepageId]);

  return (
    <Container>
      <Row style={{ alignSelf: "flexStart" }}>
        <FavouritesTeam />
      </Row>
      <Container
        className="bgcolor firstBlock"
        style={{ background: colorScheme[0], color: colorScheme[1] }}
      >
        <Row style={{ justifyContent: "center" }}>
          <h1 style={{ alignSelf: "center", margin: "10px" }}>
            {details.user ? details.user.name : null} -
          </h1>
          <h2 style={{ alignSelf: "center", margin: "10px" }}>
            {details.user ? details.user.role : null}
          </h2>
        </Row>
        <h5>
          Looking for
          {details.idea
            ? " talent to work on my idea!"
            : " an idea to work on!"}
        </h5>
        <h3>Located in {details.location}</h3>
      </Container>
      <Container
        className="bgcolor secondBlock"
        style={{ background: colorScheme[0], color: colorScheme[1] }}
      >
        <h5>Check out these websites to see some of my skills</h5>
        <Container
          as={Row}
          style={{ justifyContent: "center", flexWrap: "wrap" }}
        >
          <ListGroup horizontal>
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
        <h4 style={{ margin: "10px" }}>Skills</h4>
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
      </Container>
      <Card
        style={{
          margin: "20px",
          background: colorScheme[0],
          color: colorScheme[1],
        }}
        border="info"
      >
        <Card.Header>Projects and Experience</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>{details.experience}</Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          margin: "20px",
          background: colorScheme[0],
          color: colorScheme[1],
        }}
        border="info"
      >
        <Card.Header>A bit more about me</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>{details.bio}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
