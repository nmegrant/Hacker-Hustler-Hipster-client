import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../store/user/actions";
import { selectToken, selectUser } from "../store/user/selectors";
import { showMessageThunkCreator } from "../store/appState/actions";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function NavBanner() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken());
  const user = useSelector(selectUser());

  return (
    <Navbar bg="light" expand="lg">
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
        {token ? (
          <Navbar.Text style={{ marginRight: "10px" }}>
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

    // <div>
    //   <h5>Hacker Hustler Hipster</h5>
    //   <NavLink to="/">Search Homepages</NavLink>
    //   {token ? (
    //     <NavLink to="/mypage">My page</NavLink>
    //   ) : (
    //     <NavLink to="/login">Log in</NavLink>
    //   )}
    //   {token ? (
    //     <button onClick={() => dispatch(loggedOut())}>Log Out</button>
    //   ) : null}
    //   <p>Welcome {user.name}</p>
    // </div>
  );
}
