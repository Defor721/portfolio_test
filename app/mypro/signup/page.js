"use client";
import { useState } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (name.trim().length < 6) {
      alert("The name must be at least 6 characters long.");
      setLoading(false);
      return;
    } else if (password.trim().length < 6) {
      alert("The password must be at least 6 characters long.");
      setLoading(false);
      return;
    }
    const response = await fetch("/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });
    const result = await response.json();
    setLoading(false);
    if (response.status === 201) {
      alert(result.message);
      router.push("/mypro/login");
    } else {
      alert(result.message);
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={classes.title}>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              className={classes.signupName}
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
            <input
              className={classes.signupPassword}
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <br />
            <label htmlFor="cb" className={classes.cblabel}>
              I agree with <strong>terms</strong> and <strong>policy</strong>
              <input
                type="checkbox"
                id="cb"
                checked={isAgree}
                onChange={(e) => setIsAgree(e.target.checked)}
              ></input>
            </label>
            <br />
            <button
              type="submit"
              disabled={!isAgree}
              className={classes.signupButton}
            >
              Create Account
            </button>
          </form>
          <Link href="/mypro/login" className={classes.loginlink}>
            If you have account?
          </Link>
        </div>
      )}
    </>
  );
}
