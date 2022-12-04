import React from "react";
import Section from "../UI/Section";
import Button from "../UI/Button";
import classes from "../../styles/Technologies.module.css";
import styles from "../../styles/UI/FlipBox.module.css";

const Technologies = () => {
  return (
    <Section padding={"70px 0"} title={"Skilled website scientists who engineer websites with WordPress, Shopify, Wix and others in the fleet"}>
      <p className="subtitle">
        Skyward Digital offers fully customisable websites on various platforms. Do you know what’s right for you?
        <br />
        <br />
        We specialise in WordPress, Shopify, WooCommerce, Wix, Magento, React, Laravel and PHP to build your next high-converting website. We are your digital marketing partner to understand your
        goals and digital strategy to create a website that skyrockets results.
        <br />
        <br />
        Skyward Digital builds your website to create a rich and deep customer experience. That way, Google knows your site is engaging and valuable, helping you to rank higher.
      </p>
      <div className={styles.flipboxContainer1}>
        <div className={styles.flipbox}>1</div>
        <div className={styles.flipbox}>2</div>
        <div className={styles.flipbox}>3</div>
        <div className={styles.flipbox}>4</div>
      </div>
      <div className={styles.flipboxContainer2}>
        <div className={styles.flipbox}>5</div>
        <div className={styles.flipbox}>6</div>
        <div className={styles.flipbox}>7</div>
        <div className={styles.flipbox}>8</div>
      </div>
      <Button href="/" position={"center"}>
        Get In Touch
      </Button>
    </Section>
  );
};

export default Technologies;
