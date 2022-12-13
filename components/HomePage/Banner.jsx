import React from "react";
import classes from "../../styles/Banner.module.css";
import Button from "../UI/Button";
import Image from "next/image";
import clutch from "../../public/clutchReview.png";
import google from "../../public/googleReview.png";

const Banner = ({ title, desc, heroImg, bg }) => {
  return (
    <section className={`${classes.banner} ${bg ? classes.bg : undefined}`}>
      <div className={`container ${classes.banner}`}>
        <div className={classes.heroText}>
          {title}
          {desc}
          <Button href={"/"} position={undefined}>Get In Touch</Button>
          {/* <div className={classes.reviews}>
            <div className={classes.review}>
              <Image src={clutch} alt="" />
            </div>
            <div className={classes.review}>
              <Image src={google} alt="" />
            </div>
          </div> */}
        </div>
        <div className={classes.heroImage}>
          <Image src={heroImg} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
