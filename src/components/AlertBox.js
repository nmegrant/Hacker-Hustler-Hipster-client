import React from "react";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { selectMessage } from "../store/appState/selectors";

export default function AlertBox() {
  const message = useSelector(selectMessage());

  console.log(message);
  return (
    <Alert
      variant={message.info ? message.info.variant : null}
      show={message.info ? true : false}
    >
      {" "}
      {message.info ? message.info.message : null}
    </Alert>
  );
}
