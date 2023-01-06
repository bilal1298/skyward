import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import classes from "../../styles/UI/Accordion.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordion = () => {
  const [accordion, setAccordion] = useState(false);
  return (
    <section className={classes.accordionContainer}>
      <div className={`${classes.accordion1} ${accordion && classes.active}`}>
        <div className={classes.title} onClick={() => setAccordion(!accordion)}>
          <h3>Services</h3>
          <FontAwesomeIcon icon={accordion ? faMinus : faPlus}></FontAwesomeIcon>
        </div>
        <AnimatePresence>
          {accordion && (
            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} transition={{ duration: 0.2 }} exit={{ height: 0 }} className={classes.desc}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam consectetur possimus cum provident a voluptatum error earum, similique, itaque pariatur iure commodi et nulla!
                Nobis illum voluptatum accusamus ratione.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Accordion;
