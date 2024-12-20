import classes from "./ProjectBox.module.css";
import { useEffect, useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectBox({ title, desc1, desc2, desc3 }) {
  const router = useRouter();
  const [listVisible, setListVisible] = useState(true);
  function listShower() {
    setListVisible((prev) => !prev);
  }

  async function logoutHandler() {
    try {
      const response = await fetch("/api/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 쿠키 포함하여 요청
        cache: "no-store",
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/"); // 홈 페이지로 이동
        alert(result.message); // 로그아웃 메시지 알림
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return (
    <>
      {title === "logout" ? (
        <div className={classes.backdiv}>
          <div className={classes.logout} onClick={logoutHandler}>
            {title}
          </div>
        </div>
      ) : (
        <div className={classes.backdiv}>
          <Link href={`/mypro/${title}`} className={classes.link}>
            <div
              className={title == "login" ? classes.loginList : classes.list}
            >
              {title}
            </div>
          </Link>
          <div className={classes.desc}>
            <FaArrowAltCircleDown
              onClick={listShower}
              className={classes.arrowDown}
            />
            <ul className={listVisible ? classes.unlist : classes.unlistOut}>
              <li>{desc1}</li>
              <li>{desc2}</li>
              <li>{desc3}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
