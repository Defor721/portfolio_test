import Link from "next/link";
import classes from "./page.module.css";
import { FaCalendarCheck } from "react-icons/fa";

export default function ProjectPage() {
  return (
    <div className={classes.project}>
      <div className={classes.backdiv}>
        <Link href="/mypro/todolist" className={classes.link}>
          <div className={classes.list}>
            <FaCalendarCheck />
            TodoList
          </div>
        </Link>
        <div>d</div>
      </div>
      <div className={classes.backdiv}>
        <Link href="/mypro/login" className={classes.link}>
          <div className={classes.list}>Login/Logout</div>
        </Link>
      </div>
      <div className={classes.backdiv}>
        <Link href="/mypro/something" className={classes.link}>
          <div className={classes.list}>something</div>
        </Link>
      </div>
    </div>
  );
}
