"use client";

import Link from "next/link";
import classes from "./page.module.css";
import { FaCalendarCheck } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FaArrowAltCircleDown, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import ProjectBox from "@/components/ProjectBox";
export default function ProjectPage() {
  const [listVisible, setListVisible] = useState(true);

  function listShower() {
    setListVisible((prev) => !prev);
  }

  return (
    <div className={classes.project}>
      <ProjectBox title={"login"} />
      <FaArrowRight className={classes.rightArrow} />
      <ProjectBox title={"todolist"} />
      <FaArrowRight className={classes.rightArrow} />
      <ProjectBox title={"something"} />
    </div>
  );
}
