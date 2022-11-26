import React from "react";
import classes from "../styles/Banner.module.css";
import Link from "next/link";
import Image from "next/image";
import clutch from '../public/clutchReview.png'
import google from '../public/googleReview.png'
import banner from '../public/banner.png'

const Banner = () => {
  return (
    <section className={classes.banner}>
      <div className={`container ${classes.banner}`}>
        <div className={classes.heroText}>
          <h1>
            Best Digital <br /> Marketing Agency
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facere possimus sequi voluptatem optio adipisci, dolorum at magnam quasi necessitatibus, quae totam amet quos ea minus
            tempora consequatur earum a.
          </p>
          <Link href={"/"} className="my-button">
            Get In Touch
          </Link>
          <div className={classes.reviews}>
            <div className={classes.review}>
              <Image src={clutch} alt="" />
            </div>
            <div className={classes.review}>
              <Image src={google} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.heroImage}>
          <Image src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
