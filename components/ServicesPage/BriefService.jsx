import React from "react";
import classes from "../../styles/BriefService.module.css";
import Link from "next/link";
import { faRotate, faBoltLightning, faMobile, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BriefService = () => {
  return (
    <section className={classes.briefService}>
      <div className={`${classes.briefService} container`}>
        <div className={classes.tabs}>
          <div className={classes.tabs1}>
            <div className={classes.tab1}>
              <FontAwesomeIcon icon={faRotate} size="2x" color="#002eff" />
              <h3>Cross-browser compatible</h3>
              <p>Our designs work seamlessly on all popular browsers like Google Chrome, Safari, Internet Explorer, & Firefox, among others.</p>
            </div>
            <div className={classes.tab2}>
              <FontAwesomeIcon icon={faMobile} size="2x" color="#002eff" />
              <h3>Mobile Friendly</h3>
              <p>We create websites that adapt flawlessly to various screen sizes, and across devices like mobiles, tablets and PCs.</p>
            </div>
          </div>
          <div className={classes.tabs2}>
            <div className={classes.tab3}>
              <FontAwesomeIcon icon={faBoltLightning} size="2x" color="#002eff" />
              <h3>Lightning Fast</h3>
              <p>We design lightning fast websites that both search engines and users love.</p>
            </div>
            <div className={classes.tab4}>
              <FontAwesomeIcon icon={faGaugeSimpleHigh} size="2x" color="#002eff" />
              <h3>Conversion Optimised</h3>
              <p>Our high-performance website designs are engineered to convert browsers into buyers.</p>
            </div>
          </div>
        </div>
        <div className={classes.desc}>
          <h2 className="title">Is Your Website Ready for Blast-Off To Soar Your Sales?</h2>
          <p className="subtitle">
            Fast, mobile-first websites that create a memorable spaceflight…we mean… experience. Whether you are a GP, tradie, or eCommerce store owner, your website is your mothership. Often it's the
            first place prospects arrive from social media, SEO and paid ads. <br />
            <br />
            Asides from building visually stunning websites, we prioritise a positive and engaging experience to help you rank highly. Skyward Digital web design balances SEO and UX to get the right
            traffic and drive engagement, propelling customers deeper on their digital journey.
            <br />
            <br />
            At Skyward Digital, we understand when we lift the hood on your rocket (website) how to bring together your brand, business and customers to impact your results.
          </p>
          <Link href="/" className="my-button">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BriefService;
