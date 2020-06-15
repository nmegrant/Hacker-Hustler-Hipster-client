import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  function submitForm(event) {
    event.preventDefault();
    //Add in alter for this later
    // if (password !== confirmPassword) {
    //   console.log("Password don't match");
    // }
    console.log({ name, email, password, confirmPassword, role });
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRole("");
  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        ></input>

        <button type="submit" onClick={submitForm}>
          Sign Up!
        </button>
      </form>
    </div>
  );
}
