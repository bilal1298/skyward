import React from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";

const DMSubMenu = () => {
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/" className={classes.menuItem}>
          White Label
        </Link>
        <ul>
          <li>
            <Link href="/">SEO</Link>
          </li>
          <li>
            <Link href="/">Web Design</Link>
          </li>
          <li>
            <Link href="/">PPC</Link>
          </li>
          <li>
            <Link href="/">Content Writing</Link>
          </li>
          <li>
            <Link href="/">White Label Link Building</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DMSubMenu;
