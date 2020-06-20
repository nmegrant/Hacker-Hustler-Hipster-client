import React from "react";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { selectMessage } from "../store/appState/selectors";

export default function AlertBox() {
  const message = useSelector(selectMessage());

  let showMessage = false;
  let variant;
  let text;
  if (message !== null) {
    showMessage = true;
    variant = message.variant;
    text = message.message;
  } else {
    showMessage = false;
    variant = null;
    text = null;
  }
  return (
    <Alert variant={variant} show={showMessage}>
      {text}
    </Alert>
  );
}
