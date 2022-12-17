import React from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";

const DMSubMenu = () => {
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/website-design" className={classes.menuItem}>
          Web Design
        </Link>
        <ul>
          <li>
            <Link href="/wordpress">Wordpress</Link>
          </li>
          <li>
            <Link href="/ecommerce">Ecommerce</Link>
          </li>
          <li>
            <Link href="/business-and-services">Business & Services</Link>
          </li>
          <li>
            <Link href="/education">Education</Link>
          </li>
          <li>
            <Link href="/health-care">Health Care</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DMSubMenu;
