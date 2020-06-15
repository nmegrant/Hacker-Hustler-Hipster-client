import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunkCreator } from "../store/user/actions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    dispatch(loginThunkCreator(email, password));
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <form>
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit" onClick={submitForm}>
          Login
        </button>
      </form>
      <p>
        Not a member? Don't miss out! <Link to="/signup">Sign up now.</Link>
      </p>
    </div>
  );
}
