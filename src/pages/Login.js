import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginThunkCreator } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken());
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

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
