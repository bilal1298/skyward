import React from "react";
import classes from "../styles/WhyUs.module.css";
import Link from "next/link";

const WhyUs = () => {
  return (
    <section className={classes.whyUs}>
      <div className="container">
        <h2 className="title">Why Choose Us</h2>
        <div className={`${classes.content} row`}>
          <div className="col-6">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ipsam sapiente eum sequi impedit magnam veniam delectus! Impedit non eaque quas, ex in quae omnis! Quasi dolores
              pariatur culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ipsam sapiente eum sequi impedit magnam veniam delectus! Impedit non eaque quas, ex in quae omnis!
              Quasi dolores pariatur culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ipsam sapiente eum sequi impedit magnam veniam delectus! Impedit non eaque quas, ex
              in quae omnis! Quasi dolores pariatur culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ipsam sapiente eum sequi impedit magnam veniam delectus! Impedit non
              eaque quas, ex in quae omnis! Quasi dolores pariatur culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ipsam sapiente eum sequi impedit magnam veniam
              delectus! Impedit non eaque quas, ex in quae omnis! Quasi dolores pariatur culpa!
            </p>
          </div>
          <div className="col-6">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ipsam sapiente eum sequi impedit magnam veniam delectus! Impedit non eaque quas, ex in quae omnis! Quasi dolores
              pariatur culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ipsam sapiente eum sequi impedit magnam veniam delectus! Impedit non eaque quas, ex in quae omnis!
              Quasi dolores pariatur culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ipsam sapiente eum sequi impedit magnam veniam delectus! Impedit non eaque quas, ex
              in quae omnis! Quasi dolores pariatur culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ipsam sapiente eum sequi impedit magnam veniam delectus! Impedit non
              eaque quas, ex in quae omnis! Quasi dolores pariatur culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ipsam sapiente eum sequi impedit magnam veniam
              delectus! Impedit non eaque quas, ex in quae omnis! Quasi dolores pariatur culpa!
            </p>
          </div>
        </div>
        <Link href="/" className="my-button">
          Get In Touch
        </Link>
      </div>
    </section>
  );
};

export default WhyUs;
