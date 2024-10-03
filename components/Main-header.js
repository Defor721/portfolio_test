"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./main-header.module.css";
import { GoProjectSymlink } from "react-icons/go";
import { FaBook } from "react-icons/fa";
export default function Mainheader() {
  const path = usePathname();
  return (
    <>
      <header className={classes.mainHeader}>
        <div>
          <Link href="/" className={classes.logo}>
            Development
          </Link>
        </div>
        <div className={classes.nav}>
          <Link
            href="/mypro"
            className={`${classes.link} ${
              path.startsWith("/mypro") ? classes.active : undefined
            }`}
          >
            <GoProjectSymlink className={classes.icon} />
            project
          </Link>
          <Link
            href="/mystack"
            className={`${classes.link} ${
              path.startsWith("/mystack") ? classes.active : undefined
            }`}
          >
            <FaBook className={classes.icon} />
            stack
          </Link>
          <div></div>
        </div>
      </header>
    </>
  );
}
