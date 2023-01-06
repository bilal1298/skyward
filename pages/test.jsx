import React, { useState } from "react";
import classes from "../styles/test.module.css";
import astronaut from "../public/astronaut.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Accordion from "../components/UI/Accordion";

const test = () => {
  const [slider, setSlider] = useState(0);

  const next = () => {
    if (slider > -99) {
      setSlider(slider - 33);
    }
  };

  const prev = () => {
    if (slider < 0) {
      setSlider(slider + 33);
    }
  };

  return (
    <>
      <section className={classes.section}>
        <div className={classes.sliderContainer}>
          <div className={classes.slider} style={{ transform: `translate3d(${slider + "%"},0,0)` }}>
            <Image src={astronaut} alt="" />
            <Image src={astronaut} alt="" />
            <Image src={astronaut} alt="" />
            <Image src={astronaut} alt="" />
            <Image src={astronaut} alt="" />
            <Image src={astronaut} alt="" />
          </div>
          <div className={classes.prev}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "30px", color: "#002eff", opacity: `${slider === 0 ? ".5" : "1"}` }} onClick={prev}></FontAwesomeIcon>
          </div>
          <div className={classes.next}>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "30px", color: "#002eff", opacity: `${slider === -99 ? ".5" : "1"}` }} onClick={next}></FontAwesomeIcon>
          </div>
        </div>
      </section>
      <Accordion></Accordion>
    </>
  );
};

export default test;
