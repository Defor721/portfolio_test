import classes from "./ProjectBox.module.css";
import { useEffect, useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Link from "next/link";
export default function ProjectBox({ title }) {
  useEffect(() => {}, []);

  const [listVisible, setListVisible] = useState(true);
  function listShower() {
    setListVisible((prev) => !prev);
  }
  return (
    <div className={classes.backdiv}>
      <Link href={`/mypro/${title}`} className={classes.link}>
        <div className={title == "login" ? classes.loginList : classes.list}>
          {title}
        </div>
      </Link>
      <div className={classes.desc}>
        <FaArrowAltCircleDown
          onClick={listShower}
          className={classes.arrowDown}
        />
        <ul className={listVisible ? classes.unlist : classes.unlistOut}></ul>
      </div>
    </div>
  );
}
