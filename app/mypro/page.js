"use client";

import classes from "./page.module.css";
import { FaArrowRight } from "react-icons/fa";
import ProjectBox from "@/components/ProjectBox";

export default function ProjectPage() {
  return (
    <div className={classes.project}>
      <ProjectBox
        title={"login"}
        desc1="NextJS Api Route와 MongoDB를 이용해서 구현한 로그인/회원가입 기능"
        desc2="JWT TOKEN을 이용하여 인증관리"
        desc3="NextJS middleware 기능 이용하여 인증 상태에 따른 경로 제한"
      />
      <FaArrowRight className={classes.rightArrow} />
      <ProjectBox
        title={"todolist"}
        desc1="기본적인 CRUD 작업이 가능한 TodoList"
        desc2="인증 정보에 따라 list 렌더링"
        desc3=""
      />
      <FaArrowRight className={classes.rightArrow} />
      <ProjectBox title={"something"} desc1="더미" desc2="dd" desc3="" />
    </div>
  );
}
