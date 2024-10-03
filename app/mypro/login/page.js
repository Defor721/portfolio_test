"use client";
import classes from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("/api/checkuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });
    const result = await response.json();
    if (result.status == 200) {
      alert("login");
    } else {
      alert(result.message);
    }
    setName("");
    setPassword("");
  }

  return (
    <div className={classes.login}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label for="id">ID</label>
          <br />
          <input
            type="text"
            id="id"
            placeholder="Email"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={classes.loginName}
          />
        </div>
        <div>
          <label for="pw">Password</label>
          <br />
          <input
            type="password"
            id="pw"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={classes.loginPassword}
          />
        </div>
        <button type="submit" className={classes.loginButton}>
          Login
        </button>
        <br />
        <Link href="/mypro/signup">sign up</Link>
      </form>
    </div>
  );
}
