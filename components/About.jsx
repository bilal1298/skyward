import React from "react";
import classes from "../styles/About.module.css";
import Link from "next/link";

const About = () => {
  return (
    <section className={classes.about}>
      <div className="container">
        <h2 className={"title"}>Skyward Digital Marketing Agency</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda ipsa libero impedit atque soluta distinctio quo vero magnam pariatur similique ab, dignissimos doloribus,
          asperiores velit harum repellat sunt commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda ipsa libero impedit atque soluta distinctio quo vero magnam
          pariatur similique ab, dignissimos doloribus, asperiores velit harum repellat sunt commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda ipsa libero impedit
          atque soluta distinctio quo vero magnam pariatur similique ab, dignissimos doloribus, asperiores velit harum repellat sunt commodi.
        </p>
        <Link href="/" className="my-button">
          Get In Touch
        </Link>
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
      </div>
    </section>
  );
};

export default About;
