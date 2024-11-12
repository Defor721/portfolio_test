"use client";

import classes from "./NewTodo.module.css";
import { useState } from "react";

export default function NewTodo({ modalHandler, todoGet }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function addTodo(e) {
    e.preventDefault();
    const response = await fetch("/api/addtodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
      credentials: "include",
    });
    const result = await response.json();

    modalHandler();
    todoGet();
  }
  return (
    <form className={classes.form} onSubmit={addTodo}>
      <p>
        <label htmlFor="title">Todo</label>
        <input
          type="text"
          id="title"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          rows={3}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={modalHandler}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
