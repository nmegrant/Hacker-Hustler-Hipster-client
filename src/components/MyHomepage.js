import React from "react";

import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

export default function MyHomepage(props) {
  console.log(props.myInfo);
  return (
    <Container>
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
      {props.myInfo.websites
        ? props.myInfo.websites.map((website) => {
            return <p key={website.id}>{website.url}</p>;
          })
        : null}
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
      <h4>Projects and Experience</h4>
      <p>{props.myInfo.experience}</p>
      <h4>A bit more about me</h4>
      <p>{props.myInfo.bio}</p>
    </Container>
  );
}
