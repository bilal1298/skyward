import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import Section from "../components/UI/Section";
import braze from "../public/braze.png";
import BriefService from "../components/ServicesPage/BriefService";
import Image from "next/image";
import mailchimp from "../public/mailchimp.png";
import marketo from "../public/marketo.png";
import klaviyo from "../public/klaviyo.png";
import sfmc from "../public/sfmc.png";
import hubspot from "../public/HubSpot.png";
import classes from "../styles/pages.module.css";
import { faRotate, faBoltLightning, faMobile, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const emailmarketing = () => {
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Full-Service Email Marketing Agency That Offers Result-Driven Email Services"}
        desc={
          <p>
            We provide successful email marketing services that will convert to results. Our strategy involves achieving your email marketing goals through interactive email templates, behaviour-based
            automation, and audience segmentation to convert emails to your desired outcome.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <BriefService
        tab1i={<FontAwesomeIcon icon={faRotate} color={"#002eff"} fontSize={"30px"} />}
        tab1t={"Database scraping"}
        tab1d={"We provide an easy process to automate the collection of data, such as email addresses, and convert such information into easy access for your business."}
        tab2i={<FontAwesomeIcon icon={faMobile} color={"#002eff"} fontSize={"30px"} />}
        tab2t={"Email template design"}
        tab2d={"Whether you have a design you need to be coded or need us to construct and code a fresh design, we build attractive, user-friendly templates."}
        tab3i={<FontAwesomeIcon icon={faBoltLightning} color={"#002eff"} fontSize={"30px"} />}
        tab3t={"Email Campaign Management"}
        tab3d={"Take the load off your shoulders. Our email campaign management encompasses the scheduling, reporting and execution of your campaign. We are there from start to finish."}
        tab4i={<FontAwesomeIcon icon={faGaugeSimpleHigh} color={"#002eff"} fontSize={"30px"} />}
        tab4t={"Email operations support"}
        tab4d={"Skyward is here to help you with every step of your journey with email operations support such as scheduling, production, reporting, delivery, analysis and execution."}
        title={
          <>
            <span className="titleBackground">Stand Out</span> in a Cluttered Inbox
          </>
        }
        desc={
          <p className="subtitle">
            Email Marketing takes trusted strategies to deliver results. Our range of services includes database scraping, email template design, email campaign management, and email operations
            support. Here at Skyward, we get it. Mere visibility is not enough. We want to see you increase your revenue, growth, subscribers or loyal paying customers.
          </p>
        }
      />

      <Section title={"Custom email templates compatible with 40+ email clients, including:"} padding={"70px 0"} background={"#dde3ff"}>
        <div className="row align-items-center" style={{ marginTop: "70px" }}>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image style={{ width: "50%" }} src={mailchimp} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image src={braze} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image src={marketo} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image src={klaviyo} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image src={sfmc} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image src={hubspot} alt="" />
            </div>
          </div>
        </div>
      </Section>
      <Testimonials padding={"70px 0"} />
    </React.Fragment>
  );
};

export default emailmarketing;
