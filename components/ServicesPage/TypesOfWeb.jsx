import React from "react";
import Section from "../UI/Section";
import Button from "../UI/Button";
import classes from "../../styles/TypesOfWeb.module.css";
import desktop from "../../public/desktop.png";
import Image from "next/image";

const TypesOfWeb = () => {
  return (
    <Section padding={"70px 0"} background={"#e9edff"} title={"Types of Websites We Build"}>
      <div className={classes.typesOfWeb}>
        <div className={classes.image}>
          <div className={classes.imageContainer}>
            <Image src={desktop} alt="" />
            <Button href="/">
              Get In Touch
            </Button>
          </div>
        </div>
        <div className={classes.content}>
          <div>
            <h3>
              <strong>Wordpress</strong>
            </h3>
            <p>We build stunning, customised wordpress websites that are easy-to-manage, secure, and fast.</p>
          </div>
          <div>
            <h3>
              <strong>Ecommerce</strong>
            </h3>
            <p>Ecommerce solutions that offer best-in-standard features and functionality while remaining agile and completely customizable.</p>
          </div>
          <div>
            <h3>
              <strong>Business & Services</strong>
            </h3>
            <p>Responsive, fast and customer-centric websites that fuel your inbound marketing.</p>
          </div>
          <div>
            <h3>
              <strong>Education</strong>
            </h3>
            <p> Enabling education institutions grow their brands and harness the power of web to attract students, supporters, and donors.</p>
          </div>
          <div>
            <h3>
              <strong>Healthcare</strong>
            </h3>
            <p>Custom web design solutions for all types of healthcare institutions - including hospitals, clinics, dental practices, EHR companies, medical device companies, & more.</p>
          </div>
          <br />
        </div>
      </div>
    </Section>
  );
};

export default TypesOfWeb;
