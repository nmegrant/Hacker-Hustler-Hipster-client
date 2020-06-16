import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHomepageDetailsThunkCreator } from "../store/homepageDetails/actions";
import { selectHomepageDetails } from "../store/homepageDetails/selectors";

import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

export default function HomepageDetails() {
  const parameters = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectHomepageDetails());

  useEffect(() => {
    dispatch(fetchHomepageDetailsThunkCreator(parameters.homepageId));
  }, [dispatch, parameters.homepageId]);

  return (
    <Container>
      <h1>{details.user ? details.user.name : null}</h1>
      <h2>{details.user ? details.user.role : null}</h2>
      <h5>
        Looking for
        {details.idea ? " talent to work on my idea!" : " an idea to work on!"}
      </h5>
      <h4>{details.byline}</h4>
      <h3>{details.location}</h3>
      {details.websites
        ? details.websites.map((website) => {
            return <p key={website.id}>{website.url}</p>;
          })
        : null}
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
      <h4>Projects and Experience</h4>
      <p>{details.experience}</p>
      <h4>A bit more about me</h4>
      <p>{details.bio}</p>
    </Container>
  );
}
