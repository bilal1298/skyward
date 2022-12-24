import React from "react";
import classes from "../styles/Footer.module.css";
import Image from "next/image";
import logo from "../public/illwhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import clutch from "../public/clutchReview.png";
import google from "../public/googleReview.png";
import Link from "next/link";

const Footer = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <footer className={`${classes.footer}`}>
      <div className="container-lg">
        <div className={classes.footerRow}>
          <div className={classes.logo}>
            <Image src={logo} alt="" />
            <h3>Follow/Connect</h3>
            <div className={classes.socialIcons}>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#002eff", marginRight: "20px", backgroundColor: "#fff", padding: "10px", borderRadius: "50%", fontSize: "25px", textAlign: "center" }}
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#002eff", marginRight: "20px", backgroundColor: "#fff", padding: "10px", borderRadius: "50%", fontSize: "25px", textAlign: "center" }}
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#002eff", marginRight: "20px", backgroundColor: "#fff", padding: "10px", borderRadius: "50%", fontSize: "25px", textAlign: "center" }}
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#002eff", marginRight: "20px", backgroundColor: "#fff", padding: "10px", borderRadius: "50%", fontSize: "25px", textAlign: "center" }}
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#002eff", marginRight: "20px", backgroundColor: "#fff", padding: "10px", borderRadius: "50%", fontSize: "25px", textAlign: "center" }}
                />
              </Link>
            </div>
            <div className={classes.contact}>
              <Link href="mailto:contact@skyward.com">
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp; contact@skyward.com
              </Link>
              <Link href="tel:9876543210">
                <FontAwesomeIcon icon={faPhone} />
                &nbsp; 9876543210
              </Link>
            </div>
          </div>
          <div className={classes.reviews}>
            <Image src={clutch} alt="" />
            <Image src={google} alt="" />
            <Image src={clutch} alt="" />
            <Image src={google} alt="" />
          </div>

          <div className={classes.form}>
            <h3 className="title">Let's Sky-rocket Your Business</h3>
            <p>100% Transparency, No BS, No dodgy stuff. Just pure results.</p>
            <form onSubmit={submitHandler}>
              <input type="text" name="fullName" id="" placeholder="Full Name" required />
              <input type="text" name="businessName" id="" placeholder="Business Name" required />
              <input type="email" name="email" id="" placeholder="Email" required />
              <input type="tel" name="phone" id="" placeholder="Phone Number" required />
              <select name="service" id="" defaultValue={'DEFAULT'} required>
                <option value="DEFAULT" disabled>
                  Service You’re Interested In
                </option>
                <option value="digitalMarketing">Digital Marketing</option>
                <option value="seo">SEO</option>
                <option value="socialMedia">Social Media Marketing</option>
                <option value="ppc">PPC Ads</option>
                <option value="webdesign">Web Design</option>
                <option value="emailMarketing">Email Marketing</option>
                <option value="graphicDesign">Graphic Design</option>
                <option value="whiteLabel">White Label Services</option>
              </select>
              <button type="submit">Let's Talk</button>
            </form>
          </div>
        </div>
        <div className={classes.sitemap}>
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
