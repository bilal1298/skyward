import React from "react";
import Section from "../UI/Section";
import Button from "../UI/Button";
import classes from "../../styles/TypesOfWeb.module.css";
import { faWordpressSimple } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faBriefcase, faBook, faHouseMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const TypesOfWeb = () => {
  return (
    <Section padding={"70px 0"} background={"#e9edff"} title={"Types of Websites We Build"}>
      <div className={classes.flipboxContainer1}>
        <div className={classes.flipbox}>
          <FontAwesomeIcon icon={faWordpressSimple} fontSize={"50px"} color={"#002eff"} />
          <p>We build stunning, customised wordpress websites that are easy-to-manage, secure, and fast. </p>
        </div>

        <div className={classes.flipbox}>
          <FontAwesomeIcon icon={faCartShopping} fontSize={"50px"} color={"#002eff"} />
          <p>Ecommerce solutions that offer best-in-standard features and functionality while remaining agile and completely customizable.</p>
        </div>
        <div className={classes.flipbox}>
          <FontAwesomeIcon icon={faBriefcase} fontSize={"50px"} color={"#002eff"} />
          <p>Responsive, fast and customer-centric websites that fuel your inbound marketing.</p>
        </div>
      </div>
      <div className={classes.flipboxContainer2}>
        <div className={classes.flipbox}>
          <FontAwesomeIcon icon={faBook} fontSize={"50px"} color={"#002eff"} />
          <p>Enabling education institutions grow their brands and harness the power of web to attract students, supporters, and donors.</p>
        </div>
        <div className={classes.flipbox}>
          <FontAwesomeIcon icon={faHouseMedical} fontSize={"50px"} color={"#002eff"} />
          <p>Custom web design solutions for all types of healthcare institutions - including hospitals, clinics, dental practices, EHR companies, medical device companies, & more.</p>
        </div>
      </div>

      <Button href="/" position={"center"}>
        Get In Touch
      </Button>
    </Section>
  );
};

export default TypesOfWeb;
