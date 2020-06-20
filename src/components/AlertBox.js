import React from "react";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { selectMessage } from "../store/appState/selectors";

export default function AlertBox() {
  const message = useSelector(selectMessage());

  let showMessage = false;
  let variant;
  let text;
  if (message.info !== null) {
    showMessage = true;
    variant = message.info.variant;
    text = message.info.message;
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
