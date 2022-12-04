import React from "react";
import classes from "../../styles/About.module.css";
import Section from "../UI/Section";
import Button from "../UI/Button";

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
        Get In Touch!
      </Button>
      <h2 className="title" style={{marginTop:'50px'}}>Our Services</h2>
      <div className={classes.flipboxContainer1}>
        <div className={classes.flipbox}>1</div>
        <div className={classes.flipbox}>2</div>
        <div className={classes.flipbox}>3</div>
        <div className={classes.flipbox}>4</div>
      </div>
      <div className={classes.flipboxContainer2}>
        <div className={classes.flipbox}>5</div>
        <div className={classes.flipbox} style={{ flexBasis: "50%" }}>
          6
        </div>
        <div className={classes.flipbox}>7</div>
      </div>
    </Section>
  );
};

export default About;
