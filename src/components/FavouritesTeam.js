import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { selectMode } from "../store/user/selectors";

export default function FavouritesTeam() {
  const mode = useSelector(selectMode());

  const colorScheme = mode ? ["#222", "#FFF"] : ["#FFF", "#222"];

  return (
    <Card
      style={{
        margin: "20px",
        background: colorScheme[0],
        color: colorScheme[1],
        padding: "10px",
      }}
      border="info"
    >
      <Button as="text">Favourite 🤍</Button>
      <p>Add to Team ☆</p>
    </Card>
  );
}
