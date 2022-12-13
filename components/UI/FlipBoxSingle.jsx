import React, { useState } from "react";
import classes from "../../styles/UI/FlipBox.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button";
import Image from "next/image";

const FlipBoxSingle = ({ title, icon, desc, href }) => {
  const [front, setFront] = useState(true);
  const toggle = () => {
    setFront(!front);
  };
  return (
    <div className={classes.flipbox}>
      <div className={classes.flipboxContent}>
        <motion.div className={`${classes.plusIcon} ${!front && classes.closeIcon}`} onClick={toggle} whileFocus={{ scale: 1.2 }}>
          <FontAwesomeIcon icon={faPlus} style={{ color: "rgb(124 124 124)", fontSize: "20px" }} />
        </motion.div>
        <AnimatePresence mode="wait">
          {front ? (
            <motion.div key={1} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} style={{ textAlign: "center" }}>
              <div className={classes.iconContainer}>
                <Image src={icon} alt=""></Image>
                {/* <FontAwesomeIcon icon={icon} style={{ color: "#fff", textAlign: "center", fontSize: "30px" }} /> */}
              </div>
              <h3 className={`title`}>{title}</h3>
            </motion.div>
          ) : (
            <motion.div key={2} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <p>
                {desc}</p>
              <Button href={href} position={"center"}>
                Learn More
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FlipBoxSingle;
