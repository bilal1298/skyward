import React from "react";
import classes from "../styles/Industries.module.css";
import Link from "next/link";
import Image from "next/image";
import one from '../public/1.svg'
import two from '../public/2.svg'
import three from '../public/3.svg'
import four from '../public/4.svg'
import five from '../public/5.svg'
import six from '../public/6.svg'
import seven from '../public/7.svg'
import eight from '../public/8.svg'
import nine from '../public/9.svg'
import ten from '../public/10.svg'

const Industries = () => {
  return (
    <section className={classes.industries}>
      <div className="container text-center">
        <h2 className="title">Industries We Specialize In</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro neque vero natus incidunt temporibus cum odio delectus deserunt. Eligendi incidunt laboriosam ipsum libero rem deleniti
          aspernatur itaque minima totam!
        </p>
        <div className={classes.icons}>
          <div className={classes.icon}>
            <Image src={one} alt="" />
            <p>Lorem Ipsum</p>
          </div>
          <div className={classes.icon}>
            <Image src={two} alt="" />
            <p>Lorem Ipsum</p>
          </div>
          <div className={classes.icon}>
            <Image src={three} alt="" />
            <p>Lorem Ipsum</p>
          </div>
          <div className={classes.icon}>
            <Image src={four} alt="" />
            <p>Lorem Ipsum</p>
          </div>
          <div className={classes.icon}>
            <Image src={five} alt="" />
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.icon}>
            <Image src={six} alt="" />
            <p>Lorem Ipsum</p>
          </div>
          <div className={classes.icon}>
            <Image src={seven} alt="" />
            <p>Lorem Ipsum</p>
          </div>
          <div className={classes.icon}>
            <Image src={eight} alt="" />
            <p>Lorem Ipsum</p>
          </div>
          <div className={classes.icon}>
            <Image src={nine} alt="" />
            <p>Lorem Ipsum</p>
          </div>
          <div className={classes.icon}>
            <Image src={ten} alt="" />
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <Link href={'/'} className="my-button" >Get In Touch</Link>
      </div>
    </section>
  );
};

export default Industries;
