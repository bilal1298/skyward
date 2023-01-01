import React from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";

const DMSubMenu = () => {
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/seo" className={classes.menuItem}>
          SEO
        </Link>
        <ul>
          <li>
            <Link href="/local-seo">Local SEO</Link>
          </li>
          <li>
            <Link href="/ecommerce-seo">Ecommerce SEO</Link>
          </li>
          <li>
            <Link href="/national-global-seo">National/Global SEO</Link>
          </li>
        </ul>
        <div style={{marginTop: '20px'}}>
          <Link href="/email-marketing" className={classes.menuItem}>
            Email Marketing
          </Link>
        </div>
      </div>
      <div>
        <Link href="/ppc" className={classes.menuItem}>
          PPC
        </Link>
        <ul>
          <li>
            <Link href="/facebook-ads">Facebook Ads</Link>
          </li>
          <li>
            <Link href="/google-ads">Google Ads</Link>
          </li>
          <li>
            <Link href="/linkedin-ads">LinkedIn Ads</Link>
          </li>
          <li>
            <Link href="/tiktok-ads">TikTok Ads</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DMSubMenu;
