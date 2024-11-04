"use client";

import classes from "./page.module.css";
import { FaArrowRight } from "react-icons/fa";
import ProjectBox from "@/components/ProjectBox";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    checkCookies();
  }, []);

  async function checkCookies() {
    try {
      const response = await fetch("/api/protected", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        setIsLogin(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  return (
    <div className={classes.project}>
      <ProjectBox
        title={isLogin ? "login" : "logout"}
        desc1="NextJS Api Route와 MongoDB를 이용해서 구현한 로그인/회원가입 기능"
        desc2="JWT와 Cookie를 이용하여 인증관리"
        desc3="NextJS middleware 기능 이용하여 인증 상태에 따른 경로 제한"
      />
      <FaArrowRight className={classes.rightArrow} />
      <ProjectBox
        title={"todolist"}
        desc1="기본적인 CRUD 작업이 가능한 TodoList"
        desc2="인증 정보에 따라 list 렌더링"
        desc3="middleware 작동 안될시 새로고침..."
      />
      <FaArrowRight className={classes.rightArrow} />
      <ProjectBox title={"something"} desc1="더미" desc2="dd" desc3="" />
    </div>
  );
}
