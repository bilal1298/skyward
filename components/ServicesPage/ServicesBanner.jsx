import React from "react";
import classes from "../../styles/ServicesBanner.module.css";
import Image from "next/image";
import banner from "../../public/websitedesign.png";
import Button from "../UI/Button";

const ServicesBanner = ({ title, desc, link, button }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className={`${classes.banner}`}>
      <div className={`container ${classes.banner}`}>
        <div className={classes.heroText}>
          <h1>{title}</h1>

          {desc}

          <Button href={link}>{button}</Button>
        </div>
        <div className={classes.form}>
          <form onSubmit={submitHandler}>
            <div className={classes.inputGroup}>
              <div className={classes.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
            </div>
            <div className={classes.inputGroup}>
              <div className={classes.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="form-control" id="phone" />
              </div>
            </div>
            <div className={classes.inputGroup}>
              <div className={classes.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea name="" className="form-control" id="message" cols="20" rows="10"></textarea>
              </div>
            </div>
            <div className={classes.inputButton}>
              <input type="submit" value="Get A Free Quote" className="my-button" />
            </div>
          </form>
        </div>
      </div>
    </section>
    // <section className={classes.banner}>
    //   <div className={`container ${classes.banner}`}>
    //     <h1>Website Design & Development</h1>
    //     <div className={classes.hero}>
    //       <div className={classes.form}>
    // <form onSubmit={submitHandler}>
    //   <div className={classes.inputGroup}>
    //     <div className={classes.formGroup}>
    //       <label htmlFor="firstName">First Name</label>
    //       <input type="text" className="form-control" id="firstName" />
    //     </div>
    //     <div className={classes.formGroup}>
    //       <label htmlFor="lastName">Last Name</label>
    //       <input type="text" className="form-control" id="lastName" />
    //     </div>
    //   </div>
    //   <div className={classes.inputGroup}>
    //     <div className={classes.formGroup}>
    //       <label htmlFor="email">Email</label>
    //       <input type="email" className="form-control" id="email" />
    //     </div>
    //     <div className={classes.formGroup}>
    //       <label htmlFor="phone">Phone</label>
    //       <input type="tel" className="form-control" id="phone" />
    //     </div>
    //   </div>
    //   <div className={classes.inputGroup}>
    //     <div className={classes.formGroup}>
    //       <label htmlFor="message">Message</label>
    //       <textarea name="" className="form-control" id="message" cols="20" rows="10"></textarea>
    //     </div>
    //   </div>
    //   <div className={classes.inputButton}>
    //     <input type="submit" value="Submit" className="my-button" />
    //   </div>
    // </form>
    //       </div>
    //       <div className={classes.bannerImage}>
    //         <Image src={banner}></Image>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ServicesBanner;
