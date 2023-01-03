import React from "react";
import Section from "../UI/Section";
import classes from "../../styles/UI/FlipBox.module.css";
import FlipBoxSingle from "../UI/FlipBoxSingle";

const FlipBox = ({ items, title, desc, height, background }) => {
  return (
    <Section title={title} padding={"70px 0"} background={background}>
      {desc}
      <div className={classes.flipboxContainer}>
        {items.map((i) => (
          <FlipBoxSingle title={i.title} icon={i.icon} desc={i.desc} href={i.href} key={i.title}/>
        ))}
      </div>
    </Section>
  );
};

export default FlipBox;
