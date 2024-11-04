"use client";

import classes from "./page.module.css";
import { FaArrowRight } from "react-icons/fa";
import ProjectBox from "@/components/ProjectBox";
export default function ProjectPage() {
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
