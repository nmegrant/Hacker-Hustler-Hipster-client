import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";

export default function NavBanner() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken());

  return (
    <div>
      <NavLink to="/">Search Homepages</NavLink>
      {token ? (
        <NavLink to="/user">My page</NavLink>
      ) : (
        <NavLink to="/login">Log in</NavLink>
      )}
      {token ? (
        <button onClick={() => dispatch(loggedOut())}>Log Out</button>
      ) : null}
    </div>
  );
}
