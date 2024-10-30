"use client";

import Link from "next/link";
import classes from "./page.module.css";
import { FaCalendarCheck } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
export default function ProjectPage() {
  const [listVisible, setListVisible] = useState(true);

  function listShower() {
    setListVisible((prev) => !prev);
  }

  return (
    <div className={classes.project}>
      <div className={classes.backdiv}>
        <Link href="/mypro/login" className={classes.link}>
          <div className={classes.list}>
            <MdLogin />
            Login/Logout
          </div>
        </Link>
        <div className={classes.desc}>
          <FaArrowAltCircleDown onClick={listShower} />
          <ul className={listVisible ? classes.unlist : classes.unlistOut}>
            <li>dmddo</li>
            <li>dmddo</li>
            <li>dmddo</li>
          </ul>
        </div>
      </div>
      <div className={classes.backdiv}>
        <Link href="/mypro/todolist" className={classes.link}>
          <div className={classes.list}>
            <FaCalendarCheck />
            TodoList
          </div>
        </Link>
        <div className={classes.desc}>
          <FaArrowAltCircleDown onClick={listShower} />
          <ul className={listVisible ? classes.unlist : classes.unlistOut}>
            <li>dmddo</li>
            <li>dmddo</li>
            <li>dmddo</li>
          </ul>
        </div>
      </div>
      <div className={classes.backdiv}>
        <Link href="/mypro/something" className={classes.link}>
          <div className={classes.list}>something</div>
        </Link>
        <div className={classes.desc}>
          <FaArrowAltCircleDown
            onClick={listShower}
            className={classes.arrow}
          />
          <ul className={listVisible ? classes.unlist : classes.unlistOut}>
            <li>dmddo</li>
            <li>dmddo</li>
            <li>dmddo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
