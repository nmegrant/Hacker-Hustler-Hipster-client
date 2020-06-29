import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../store/user/actions";
import { selectToken, selectUser, selectMode } from "../store/user/selectors";
import { setDarkMode } from "../store/user/actions";
import { showMessageThunkCreator } from "../store/appState/actions";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Switch from "react-switch";

export default function NavBanner(props) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken());
  const user = useSelector(selectUser());
  const darkMode = useSelector(selectMode());

  return (
    <Navbar bg="info" expand="lg">
      <Navbar.Brand>Hacker Hipster Hustler</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact to="/">
            Search Homepages
          </Nav.Link>
          {token ? (
            <Nav.Link as={NavLink} to="/mypage">
              My page
            </Nav.Link>
          ) : (
            <Nav.Link as={NavLink} to="/login">
              Log in
            </Nav.Link>
          )}
        </Nav>
        <Navbar.Text style={{ margin: "10px" }}>
          {darkMode ? "Light" : "Dark"} Mode
        </Navbar.Text>
        <Nav style={{ margin: "4px 0px 0px 0px" }}>
          <Switch
            checked={darkMode}
            onChange={() => {
              dispatch(setDarkMode(!darkMode));
            }}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#5bc0de"
            offColor="#000000"
          />
        </Nav>
        {token ? (
          <Navbar.Text style={{ marginRight: "10px", marginLeft: "10px" }}>
            Welcome {user.name}
          </Navbar.Text>
        ) : null}
        {token ? (
          <Button
            onClick={() => {
              dispatch(loggedOut());
              dispatch(showMessageThunkCreator("Logged out", "info"));
            }}
            style={{
              backgroundColor: "rgba(102, 16, 242, 1)",
              border: "rgba(102, 16, 242, 1)",
            }}
            href="/"
          >
            Log Out
          </Button>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
}
