import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../store/user/actions";
import { selectToken, selectUser } from "../store/user/selectors";

export default function NavBanner() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken());
  const user = useSelector(selectUser());

  return (
    <div>
      <h5>Hacker Hustler Hipster</h5>
      <NavLink to="/">Search Homepages</NavLink>
      {token ? (
        <NavLink to="/mypage">My page</NavLink>
      ) : (
        <NavLink to="/login">Log in</NavLink>
      )}
      {token ? (
        <button onClick={() => dispatch(loggedOut())}>Log Out</button>
      ) : null}
      <p>Welcome {user.name}</p>
    </div>
  );
}
