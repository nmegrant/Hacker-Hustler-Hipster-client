import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <label>email</label>
        <input
          type="email"
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
