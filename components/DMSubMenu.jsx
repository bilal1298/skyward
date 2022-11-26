import React from "react";
import classes from '../styles/ServicesSub.module.css'
import Link from "next/link";

const DMSubMenu = () => {
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/" className={classes.menuItem}>
          SEO
        </Link>
        <ul>
          <li>
            <Link href="/">Local SEO</Link>
          </li>
          <li>
            <Link href="/">Ecommerce SEO</Link>
          </li>
          <li>
            <Link href="/">National/Global SEO</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/" className={classes.menuItem}>
          PPC
        </Link>
        <ul>
          <li>
            <Link href="/">Facebook Ads</Link>
          </li>
          <li>
            <Link href="/">Google Ads</Link>
          </li>
          <li>
            <Link href="/">LinkedIn Ads</Link>
          </li>
          <li>
            <Link href="/">TikTok Ads</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/" className={classes.menuItem}>
          Email Marketing
        </Link>
      </div>
    </div>
  );
};

export default DMSubMenu;
