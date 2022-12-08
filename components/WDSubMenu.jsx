import React from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";

const DMSubMenu = () => {
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/" className={classes.menuItem}>
          Web Design
        </Link>
        <ul>
          <li>
            <Link href="/wordpress">Wordpress</Link>
          </li>
          <li>
            <Link href="/">Ecommerce</Link>
          </li>
          <li>
            <Link href="/">Business & Services</Link>
          </li>
          <li>
            <Link href="/">Education</Link>
          </li>
          <li>
            <Link href="/">Health Care</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DMSubMenu;
