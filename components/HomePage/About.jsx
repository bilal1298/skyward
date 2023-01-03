import React, { useState, useRef } from "react";
import classes from "../../styles/About.module.css";
import seo from "../../public/seo.svg"
import smm from "../../public/smm.svg"
import ppc from "../../public/ppc.svg"
import webdesign from "../../public/webdesign.svg"
import email from "../../public/email.svg"
import whitelabel from "../../public/whitelabel.svg"
import Section from "../UI/Section";
import Button from "../UI/Button";
import FlipBox from "../ServicesPage/FlipBox";

const About = () => {
  
  return (
    <Section padding={"70px 0"} background={"none"} title={"Australia’s Fastest Growing Digital Marketing Agency"}>
      <p className="subtitle">
        We are an all-around digital marketing agency focused on your success. Skyward Digital offers detailed and transparent reporting to measure our strategy in real time so that you can see the
        impact of our marketing tactics.
        <br />
        <br />
        Don’t leave your revenue goals drifting through the universe to infinity and beyond. Instead, transform your business with a clear digital strategy (think: battle plan). Then, fuel your
        pipeline by attracting and converting the right clients.
      </p>
      <Button href={"/"} position={"center"}>
        Get In Touch
      </Button>

      
    </Section>
  );
};

export default About;
