import classes from "./page.module.css";
import Link from "next/link";
export default async function SomeThing() {
  return (
    <div className={classes.container}>
      <Link href="https://linkle-nine.vercel.app/">
        <h1 className={classes.title}>Linkle</h1>
      </Link>
      <div className={classes.grid}>
        <div className={classes.column}>
          <div className={classes.section}>
            <h2 className={classes.subtitle}>서비스</h2>
            <p className={classes.text}>
              소셜 링크 서비스(In my link) 기능 고도화 및 UI/UX 개선
            </p>
          </div>

          <div className={classes.section}>
            <h2 className={classes.subtitle}>프론트엔드 기술 스택</h2>
            <p className={classes.text}>
              NextJS, React, Javascript, Tailwindcss, Figma
            </p>
          </div>

          <div className={classes.section}>
            <h2 className={classes.subtitle}>백엔드 기술 스택</h2>
            <p className={classes.text}>MongoDB, NextJS API routes</p>
          </div>

          <div className={classes.section}>
            <h2 className={classes.subtitle}>역할</h2>
            <p className={classes.text}>Admin page UI/UX 구축, API 전체 구축</p>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.section}>
            <h2 className={classes.subtitle}>작업 기간</h2>
            <p className={classes.text}>
              2024.10.17~현재 (기능 추가 작업 진행중)
            </p>
          </div>

          <div className={classes.section}>
            <h2 className={classes.subtitle}>구성원</h2>
            <p className={classes.text}>
              Frontend(노지훈/안승지/김채영/김승원/김민경)
              <br></br>
              Backend(노지훈/김승원)
            </p>
          </div>

          <div className={classes.section}>
            <h2 className={classes.subtitle}>프로젝트 회고</h2>
            <p className={classes.text}>
              Figma를 통한 작업 페이지 별 업무 할당을 통해 명확한 업무 분담 가능
              <br></br>
              작업 전 협업을 위해 필요한 요소들에 대해 이해도가 높아짐(코딩
              컨벤션, 깃 컨벤션)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
