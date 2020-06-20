import React from "react";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { selectMessage } from "../store/appState/selectors";

export default function AlertBox() {
  const message = useSelector(selectMessage());

  console.log(message);

  return <Alert variant="info"> "Hello"</Alert>;
}
