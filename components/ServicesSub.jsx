import React, { useState } from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";
import DMSubMenu from "./DMSubMenu";
import WDSubMenu from "./WDSubMenu";
import WLSubMenu from "./WLSubMenu";
import DSubMenu from "./DSubMenu";

const ServicesSub = (props) => {
  const [activeMenu, setActiveMenu] = useState("dm");

  return (
    <div className={`container ${classes.servicesSubContainer}`} onMouseEnter={() => props.setServiceActive(true)} onMouseLeave={() => props.setServiceActive(false)}>
      <div className={classes.menu}>
        <ul>
          <li className={activeMenu === "dm" ? classes.active : undefined} onMouseEnter={() => setActiveMenu("dm")}>
            <Link href="/digital-marketing" className={classes.active}>
              Digital Marketing
            </Link>
          </li>
          <li className={activeMenu === "wd" ? classes.active : undefined} onMouseEnter={() => setActiveMenu("wd")}>
            <Link href="/website-design">Web Design</Link>
          </li>
          <li className={activeMenu === "wl" ? classes.active : undefined} onMouseEnter={() => setActiveMenu("wl")}>
            <Link href="/white-label">White Label</Link>
          </li>
          <li className={activeMenu === "d" ? classes.active : undefined} onMouseEnter={() => setActiveMenu("d")}>
            <Link href="/design">Design</Link>
          </li>
        </ul>
      </div>
      {activeMenu === "dm" && <DMSubMenu />}
      {activeMenu === "wd" && <WDSubMenu />}
      {activeMenu === "wl" && <WLSubMenu />}
      {activeMenu === "d" && <DSubMenu />}
    </div>
  );
};

export default ServicesSub;
