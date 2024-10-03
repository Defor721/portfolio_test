import classes from "./NewTodo.module.css";
import { useState } from "react";
export default function NewTodo({ addTodo, modalHandler }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function desChangeHandler(event) {
    setDesc(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    addTodo({
      title: title,
      description: desc,
      key: Math.random(),
    });
    console.log(title, desc);
    modalHandler();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Todo</label>
        <input type="text" id="title" required onChange={titleChangeHandler} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          rows={3}
          onChange={desChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={modalHandler}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
