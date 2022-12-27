import React from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";

const DMSubMenu = () => {
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/white-label" className={classes.menuItem}>
          White Label
        </Link>
        <ul>
          <li>
            <Link href="/white-label-seo">SEO</Link>
          </li>
          <li>
            <Link href="/white-label-web-design">Web Design</Link>
          </li>
          <li>
            <Link href="/white-label-ppc">PPC</Link>
          </li>
          <li>
            <Link href="/white-label-content-writing">Content Writing</Link>
          </li>
          <li>
            <Link href="/white-label-link-building">White Label Link Building</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DMSubMenu;
