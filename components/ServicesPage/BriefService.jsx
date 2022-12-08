import React from "react";
import classes from "../../styles/BriefService.module.css";
import Link from "next/link";

const BriefService = ({ tab1i, tab1t, tab1d, tab2i, tab2t, tab2d, tab3i, tab3t, tab3d, tab4i, tab4t, tab4d, title, desc }) => {
  return (
    <section className={classes.briefService}>
      <div className={`${classes.briefService} container`}>
        <div className={classes.tabs}>
          <div className={classes.tabs1}>
            <div className={classes.tab1}>
              {tab1i}
              <h3>{tab1t}</h3>
              <p>{tab1d}</p>
            </div>
            <div className={classes.tab2}>
              {tab2i}
              <h3>{tab2t}</h3>
              <p>{tab2d}</p>
            </div>
          </div>
          <div className={classes.tabs2}>
            <div className={classes.tab3}>
              {tab3i}
              <h3>{tab3t}</h3>
              <p>{tab3d}</p>
            </div>
            <div className={classes.tab4}>
              {tab4i}
              <h3>{tab4t}</h3>
              <p>{tab4d}</p>
            </div>
          </div>
        </div>
        <div className={classes.desc}>
          <h2 className="title">{title}</h2>

          {desc}

          <Link href="/" className="my-button">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BriefService;
