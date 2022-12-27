import React from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";

const DMSubMenu = () => {
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/" className={classes.menuItem}>
          Design
        </Link>
        <ul>
          <li>
            <Link href="/graphic-design">Graphic Design</Link>
          </li>
          <li>
            <Link href="/logo-design">Logo Design</Link>
          </li>
          <li>
            <Link href="/content-writing">Content Writing</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DMSubMenu;
