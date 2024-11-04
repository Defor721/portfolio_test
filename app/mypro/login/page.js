"use client";
import classes from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/checkuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });
    if (response.ok) {
      router.push("/mypro");
      const result = await response.json();
      alert(result.message);
    } else {
      setLoading(false);
      const result = await response.json();
      alert(result.message);
      setName("");
      setPassword("");
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={classes.login}>
          <form onSubmit={handleSubmit}>
            <h1 className={classes.logintitle}>Login</h1>
            <div>
              <label htmlFor="id">Name</label>
              <br />
              <input
                type="text"
                id="id"
                placeholder="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={classes.loginName}
              />
            </div>
            <div>
              <label htmlFor="pw">Password</label>
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
            <Link href="/mypro/signup" className={classes.signuplink}>
              sign up
            </Link>
          </form>
        </div>
      )}
    </>
  );
}
