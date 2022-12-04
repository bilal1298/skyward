import React from "react";
import classes from "../../styles/ServicesBanner.module.css";
import Image from "next/image";
import banner from "../../public/websitedesign.png";
import Button from "../UI/Button";

const ServicesBanner = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className={`${classes.banner}`}>
      <div className={`container ${classes.banner}`}>
        <div className={classes.heroText}>
          <h1>Web Design To Propel And Power Your Business Around Your Universe</h1>
          <p>
            Our web design service helps local businesses, service providers, and eCommerce website owners with substandard websites grow their leads, convert more clients and increase revenue.
            <br />
            <br />
            We reimagine your website with cost-effective packages and transparent reporting to ignite your business.
          </p>
          <Button href={"/"}>Get In Touch</Button>
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
