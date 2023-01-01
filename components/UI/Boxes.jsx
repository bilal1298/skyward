import React from "react";
import Section from "./Section";
import Button from "./Button";
import classes from "../../styles/UI/Boxes.module.css";
import Image from "next/image";

const Boxes = ({ title, padding, background, items, desc, href }) => {
  return (
    <Section title={title} padding={padding} background={background}>
      {desc}
      <div className={classes.boxesContainer}>
        {items.map((i) => (
          <div className={classes.box} key={i.title}>
            <div className={classes.boxContent}>
              <Image src={i.icon} alt="" />
              <h3>{i.title}</h3>
              <p>{i.desc}</p>
              {i.href && <Button href={i.href}>Learn More</Button>}
            </div>
          </div>
        ))}
      </div>
      {href && (
        <div style={{marginTop: '50px'}}>
          <Button href={href} position={"center"}>
            Get In Touch
          </Button>
        </div>
      )}
    </Section>
  );
};

export default Boxes;
