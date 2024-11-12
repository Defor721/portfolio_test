import classes from "./Todo.module.css";

export default function Todo({ title, description, createAt, todoGet }) {
  async function deleteTodo(e) {
    e.preventDefault();
    const response = await fetch("/api/deletetodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ createAt }),
    });
    const result = await response.json();
    alert(result.message);
    todoGet();
  }

  return (
    <div className={classes.todo}>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.buttondiv}>
        <button className={classes.todobutton} onClick={deleteTodo}>
          delete
        </button>
      </div>
    </div>
  );
}
