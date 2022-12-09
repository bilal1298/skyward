import React, { useState, useRef } from "react";
import classes from "../../styles/About.module.css";
import Section from "../UI/Section";
import Button from "../UI/Button";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  // const ref = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"],
  // });
  // const y = useSpring(scrollYProgress);
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
      {/* <div className={classes.test} ref={ref}>
        <div className={classes.test1} onClick={() => console.log(y.current)}>
          <motion.div className={classes.test2} whileInView={{ height: scrollYProgress.current * 100 + "%" }}></motion.div>
        </div>
      </div> */}
      <h2 className="title" style={{ marginTop: "50px" }}>
        Our Services
      </h2>
      <div className={classes.flipboxContainer1}>
        <div className={classes.flipbox}>
          <div className={classes.card}>
            <div className={classes.front}>
              <FontAwesomeIcon icon={faSearchengin} fontSize={"50px"} style={{ marginBottom: "20px" }} color={"#fece1a"} />
              <h3 className="title">Search Engine Optimization</h3>
            </div>
            <div className={classes.back}>
              <p>
                We provide SEO services that deliver real results. No beating around the bush with metrics like impressions, traffic or clicks. Our ROI-focused strategies focus on the most important
                metric for your business - conversions. With a range of services from local SEO, E-Commerce SEO to National/International services, we make sure your business is seen.
              </p>
              <Button href={"/"}>Learn More</Button>
            </div>
          </div>
        </div>
        <div className={classes.flipbox}>
          <div className={classes.card}>
            <div className={classes.front}>
              <FontAwesomeIcon icon={faSearchengin} fontSize={"50px"} style={{ marginBottom: "20px" }} color={"#fece1a"} />
              <h3 className="title">Social Media Marketing</h3>
            </div>
            <div className={classes.back}>
              <p>
                Getting likes is easy but it doesn’t help your business generate revenue. We transform businesses into lead generation machines through effective advertising on Facebook, Instagram,
                and Tik Tok. Cut through the clutter with social campaigns that are designed to keep you one step ahead of the competition.
              </p>
              <Button href={"/"}>Learn More</Button>
            </div>
          </div>
        </div>
        <div className={classes.flipbox}>
          <div className={classes.card}>
            <div className={classes.front}>
              <FontAwesomeIcon icon={faSearchengin} fontSize={"50px"} style={{ marginBottom: "20px" }} color={"#fece1a"} />
              <h3 className="title">Pay Per Click Marketing</h3>
            </div>
            <div className={classes.back}>
              <p>
                Turn your ad spend on paid search and social platforms into game changing revenue through our proprietary strategies. We have services with Google ads, Microsoft ads, LinkedIn ads, and
                whatever platform you want to translate clicks into success.
              </p>
              <Button href={"/"}>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.flipboxContainer2}>
        <div className={classes.flipbox}>
          <div className={classes.card}>
            <div className={classes.front}>
              <FontAwesomeIcon icon={faSearchengin} fontSize={"50px"} style={{ marginBottom: "20px" }} color={"#fece1a"} />
              <h3 className="title">Web Design</h3>
            </div>
            <div className={classes.back}>
              <p>
                Our web design service helps local businesses, service providers, and eCommerce website owners with substandard websites grow their leads, convert more clients and increase revenue. We
                reimagine your website with cost-effective packages and transparent reporting to ignite your business.
              </p>
              <Button href={"/website-design"}>Learn More</Button>
            </div>
          </div>
        </div>
        <div className={classes.flipbox}>
          <div className={classes.card}>
            <div className={classes.front}>
              <FontAwesomeIcon icon={faSearchengin} fontSize={"50px"} style={{ marginBottom: "20px" }} color={"#fece1a"} />
              <h3 className="title">Email Marketing</h3>
            </div>
            <div className={classes.back}>
              <p>
                Is Email marketing dead? Only if you don’t know how to do it right. Skyward specializes in email marketing strategies that will help you stand out in a cluttered inbox. We offer a
                range of services from email marketing to email campaign management.
              </p>
              <Button href={"/"}>Learn More</Button>
            </div>
          </div>
        </div>
        <div className={classes.flipbox}>
          <div className={classes.card}>
            <div className={classes.front}>
              <FontAwesomeIcon icon={faSearchengin} fontSize={"50px"} style={{ marginBottom: "20px" }} color={"#fece1a"} />
              <h3 className="title">White Label Services</h3>
            </div>
            <div className={classes.back}>
              <p>
                We can support your agency with our white-label service, compromising a dedicated team of developers, designers, and digital marketers. When you partner with Skyward Digital, we help
                your agency reduce costs and improve productivity. And we know how important your clients are to your agency, so we treat them just like their own.{" "}
              </p>
              <Button href={"/"}>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
