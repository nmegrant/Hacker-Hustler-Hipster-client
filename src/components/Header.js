import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { loggedOut } from "../store/user/actions";

export default function Header() {
  const token = useSelector(selectToken());
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Header!</h1>
      {token ? (
        <button onClick={() => dispatch(loggedOut())}>Log Out</button>
      ) : (
        <button>
          <Link to="/login">Log In</Link>
        </button>
      )}
    </div>
  );
}
