import classes from "./page.module.css";
import { CgProfile } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { RiNextjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";

import "./globals.css";
export default function Home() {
  return (
    <>
      <main className={classes.home}>
        <div className={classes.icondiv}>
          <FaReact className={`${classes.stackicon} ${classes.rei}`} />
          <TiHtml5 className={`${classes.stackicon} ${classes.hti}`} />
          <br />
          <RiJavascriptFill className={`${classes.stackicon} ${classes.jai}`} />
          <BiLogoTypescript className={`${classes.stackicon} ${classes.tyi}`} />
          <br />
          <TbWorldWww className={`${classes.stackicon} ${classes.wwi}`} />
          <RiNextjsLine className={`${classes.stackicon} ${classes.nei}`} />
        </div>
        <div className={classes.maindiv}>
          <h1 className={classes.title}>
            <CgProfile />
            <br />
            No JiHun
          </h1>
          <p className={classes.desc1}>Frontend Junior Developer</p>
          <p className={classes.desc2}>
            <MdOutlineEmail />
            <br />
            721snglwhs@gmail.com
          </p>
          <p className={classes.desc3}>
            <FaGithub />
            <br />
            https://github.com/Defor721
          </p>
        </div>
      </main>
    </>
  );
}
