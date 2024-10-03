import classes from "./Todo.module.css";

export default function Todo({ title, description, key, deleteHandler }) {
  function deleteTodo() {
    deleteHandler(key);
  }

  return (
    <div className={classes.todo}>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.buttondiv}>
        <button className={classes.todobutton}>update</button>
        <button className={classes.todobutton} onClick={deleteTodo}>
          delete
        </button>
      </div>
    </div>
  );
}
