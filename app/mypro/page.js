"use client";

import classes from "./page.module.css";
import { FaArrowRight } from "react-icons/fa";
import ProjectBox from "@/components/ProjectBox";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function ProjectPage() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    checkCookies();
  }, []);

  async function checkCookies() {
    try {
      const response = await fetch("/api/protected", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setIsLogin(true);
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
      <ProjectBox
        title={"linkle"}
        desc1="기업과제 - 소셜링크 웹페이지 고도화(팀프로젝트)"
        desc2="Vercel로 배포됨 (https://linkle-nine.vercel.app/)"
        desc3="전체 api 구축 및 admin 페이지 UI/UX 담당"
      />
    </div>
  );
}
