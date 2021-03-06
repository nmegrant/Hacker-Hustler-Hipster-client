import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function MyPageBanner(props) {
  return (
    <Jumbotron style={{ backgroundColor: "rgba(102, 16, 242, 0.2)" }}>
      <h1>{props.name}</h1>
      <p>
        View and edit the information others can see and use to find you. Create
        and manage your ideas for a start up.
      </p>
    </Jumbotron>
  );
}
