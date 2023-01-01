import React from "react";
import classes from "../../styles/Industries.module.css";
import Link from "next/link";
import Image from "next/image";
import one from "../../public/1.svg";
import two from "../../public/2.svg";
import three from "../../public/3.svg";
import four from "../../public/4.svg";
import five from "../../public/5.svg";
import six from "../../public/6.svg";
import seven from "../../public/7.svg";
import eight from "../../public/8.svg";
import nine from "../../public/9.svg";
import ten from "../../public/10.svg";
import Section from "../UI/Section";
import Button from "../UI/Button";

const Industries = ({background}) => {
  return (
    <Section padding={"70px 0"} background={background} title={"Industries We Specialize In"}>
      <div className={classes.icons}>
        <div className={classes.icon}>
          <Image src={one} alt="" />
          <p>Business</p>
        </div>
        <div className={classes.icon}>
          <Image src={two} alt="" />
          <p>Education</p>
        </div>
        <div className={classes.icon}>
          <Image src={three} alt="" />
          <p>Finance</p>
        </div>
        <div className={classes.icon}>
          <Image src={four} alt="" />
          <p>Healthcare</p>
        </div>
        <div className={classes.icon}>
          <Image src={five} alt="" />
          <p>Real Estate</p>
        </div>
        <div className={classes.icon}>
          <Image src={five} alt="" />
          <p>Insurance</p>
        </div>
      </div>
      <div className={classes.icons}>
        <div className={classes.icon}>
          <Image src={six} alt="" />
          <p>Tech</p>
        </div>
        <div className={classes.icon}>
          <Image src={seven} alt="" />
          <p>Automotive</p>
        </div>
        <div className={classes.icon}>
          <Image src={eight} alt="" />
          <p>Dental</p>
        </div>
        <div className={classes.icon}>
          <Image src={nine} alt="" />
          <p>Non-Profit</p>
        </div>
        <div className={classes.icon}>
          <Image src={ten} alt="" />
          <p>Recruitment</p>
        </div>
        <div className={classes.icon}>
          <Image src={ten} alt="" />
          <p>Legal</p>
        </div>
      </div>
      <Button href={"/"} position={"center"}>
        Get In Touch
      </Button>
    </Section>
  );
};

export default Industries;
