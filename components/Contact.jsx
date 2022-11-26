import React from "react";
import classes from "../styles/Contact.module.css";

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className={classes.contact}>
      <div className="container">
        <h2 className="title">Contact</h2>
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
            <input type="submit" value="Submit" className="my-button" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
