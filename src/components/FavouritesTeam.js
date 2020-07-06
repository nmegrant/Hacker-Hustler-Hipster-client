import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { selectMode, selectFavourites } from "../store/user/selectors";
import {
  removeFromFavouritesThunkCreator,
  addToFavouritesThunkCreator,
} from "../store/user/actions";

export default function FavouritesTeam(props) {
  const mode = useSelector(selectMode());
  const favouriteList = useSelector(selectFavourites());
  const dispatch = useDispatch();
  const colorScheme = mode ? ["#222", "#FFF"] : ["#FFF", "#222"];

  const isFavourite = favouriteList.find(
    (user) => user.favouriteId === props.id
  );

  function favourUnfavour(event) {
    event.preventDefault();
    if (isFavourite) {
      dispatch(removeFromFavouritesThunkCreator(props.id));
    } else {
      dispatch(addToFavouritesThunkCreator(props.id));
    }
  }

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
      <Button
        style={{
          border: colorScheme[0],
          background: colorScheme[0],
          margin: "5px",
          color: colorScheme[1],
        }}
        onClick={favourUnfavour}
      >
        Favourite {isFavourite === undefined ? "🤍" : "❤️"}
      </Button>
      <p>Add to Team ☆</p>
    </Card>
  );
}
