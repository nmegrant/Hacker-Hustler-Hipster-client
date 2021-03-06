import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { selectMode, selectFavourites } from "../store/user/selectors";
import { selectFavsList } from "../store/favourites/selectors";
import { getFavouriteUsersThunkCreator } from "../store/favourites/actions";

import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyHomepage(props) {
  const [show, setShow] = useState(false);
  const mode = useSelector(selectMode());
  const colorScheme = mode ? ["#222", "#FFF"] : ["#FFF", "#222"];

  const dispatch = useDispatch();
  const favUserIds = useSelector(selectFavourites());
  const favsList = useSelector(selectFavsList());
  console.log("favsList", favsList);
  console.log("favUserId", favUserIds);

  useEffect(() => {
    dispatch(getFavouriteUsersThunkCreator(favUserIds));
  }, [dispatch, favUserIds]);

  return (
    <div>
      <Card
        as={Col}
        md={{ span: 6, offset: 0 }}
        style={{ width: "210px", margin: "20px" }}
        border="info"
      >
        <Button
          style={{
            backgroundColor: "#6610f2",
            border: "#6610f2",
            margin: "5px",
            width: "170px",
          }}
          onClick={() => setShow(true)}
        >
          Show My Favourites
        </Button>
        <Button
          style={{
            backgroundColor: "#6610f2",
            border: "#6610f2",
            margin: "5px",
            width: "170px",
          }}
        >
          Show My Team
        </Button>
      </Card>
      <Container as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Modal show={show}>
          <Modal.Header>My favourites</Modal.Header>
          <Modal.Body>
            <ListGroup>
              {favsList.map((user) => {
                if (user !== null) {
                  return (
                    <ListGroup.Item key={user.email}>
                      <Link
                        to={`/homepages/${user.id}`}
                        style={{ color: "#6610f2" }}
                      >
                        {user.name}{" "}
                      </Link>
                    </ListGroup.Item>
                  );
                } else {
                  return null;
                }
              })}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShow(false)} variant="info">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <h2>{props.myInfo.user ? props.myInfo.user.role : null}</h2>
        <h5>
          Looking for
          {props.myInfo.idea
            ? " talent to work on my idea!"
            : " an idea to work on!"}
        </h5>
        <p>{props.myInfo.byline}</p>
        <h3 style={{ margin: "10px" }}>Located in {props.myInfo.location}</h3>
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
        <h4 style={{ margin: "10px" }}>Skills</h4>
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
            <Card.Text>{props.myInfo.experience}</Card.Text>
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
            <Card.Text>{props.myInfo.bio}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
