import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div
      className="loading_spinner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
      }}
    >
      <Spinner animation="grow" variant="info"></Spinner>
    </div>
  );
}
