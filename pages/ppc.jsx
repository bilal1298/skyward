import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import Section from "../components/UI/Section";
import astronaut from "../public/astronaut.png";
import Image from "next/image";
import FlipBox from "../components/ServicesPage/FlipBox";
import classes from "../styles/pages.module.css"

const flipboxItems = [
  {
    title: "Facebook ads",
    desc: "We help our clients reach their ideal customers and drive them to take action through superior targeting, effective ad copy, visuals, and calls-to-action.",
    icon: astronaut,
    href: "/wordpress",
  },
  {
    title: "Instagram ads",
    desc: "We utilise Instagram ads to increase our clients' leads and sales by creating visually appealing and engaging ads that are delivered to the right audience.",
    icon: astronaut,
    href: "/shopify",
  },
  {
    title: "Google ads",
    desc: "We use a combination of keyword research, ad copywriting, and bid management to ensure that our clients' ads are seen by the right people at the right time.",
    icon: astronaut,
    href: "/woocommerce",
  },
  {
    title: "Microsoft ads",
    desc: "We leverage the second most important search engine after Google, Microsoft ads, to deliver effective ad campaigns to your target audience.",
    icon: astronaut,
    href: "/magento",
  },
  {
    title: "TikTok ads",
    desc: "We utilise TikTok ads to increase our clients revenue by creating fun and engaging ads that capture the attention of younger audiences on the platform.",
    icon: astronaut,
    href: "/wix",
  },
  {
    title: "LinkedIn ads",
    desc: "By using LinkedIn's advanced targeting options, we can help our clients connect with their ideal customers and drive them to take action on the world’s largest professional network.",
    icon: astronaut,
    href: "/wix",
  },
  {
    title: "Quora ads",
    desc: "Increase your leads by reaching a highly engaged audience on the popular question and answer platform.",
    icon: astronaut,
    href: "/wix",
  },
];
const ppc = () => {
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Bypass the Industry Clutter and Ensure Your Brand Is on Top of Page One With Superior PPC Services"}
        desc={
          <p>
            We specialise in helping businesses of all sizes improve their online presence and drive more leads and sales through targeted advertising.
            <br />
            <br />
            We’ve generated over $5 M in revenue for our clients in 2022! Google Ads Management generated well over $5 million in revenue just in 2018!
            <br />
            <br />
            We know how to create compelling ad campaigns that grab attention and drive results across PPC platforms like Google, Microsoft, Facebook, Instagram, LinkedIn, Quora and Tik Tok.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <FlipBox items={flipboxItems} title={"Our Seasoned Team of PPC Experts Can Help You With"} desc={""} />
      <Industries background={'#fff'}/>
      <Testimonials padding={"70px 0"} />
      <Section title={<>Our <span className="titleBackground">Process</span></>} padding={"70px 0"} background={"#dde3ff"}>
        <div className={classes.sbsImageContainer} style={{ marginTop: "70px" }}>
          <div className={classes.sbsImage}>
            <Image src={astronaut} alt="" style={{ width: "60%" }} />
          </div>
          <div className={classes.sbsImage}>
            <h3 className={classes.sbsTitle}>Identify Goals</h3>
            <p>Everything we do is focused on maximising your ROI. We identify goals, evaluate historical data, and create a clear plan during our initial evaluation.</p>
            <br />
            <h3 className={classes.sbsTitle}>Setup Tracking</h3>
            <p>All of our PPC marketing staff is Google Ads and Google Analytics certified. We can integrate simple to advanced tracking options for any clients, regardless of their tech stack.</p>
          </div>
        </div>
        <div className={classes.sbsImageContainerI}>
          <div className={classes.sbsImage}>
            <h3 className={classes.sbsTitle}>Define Keywords & Targeting</h3>
            <p>
              You can burn hundreds of thousands of dollars every year if you don't use the appropriate keywords and targeting. When approaching new clients, we frequently find that deleting subpar
              ads and keywords more than pays for our fees. In many cases, we either refine their account or create a new one from scratch.
            </p>
          </div>
          <div className={classes.sbsImage}>
            <Image src={astronaut} alt="" style={{ width: "60%" }} />
          </div>
        </div>
        <div className={classes.sbsImageContainer}>
          <div className={classes.sbsImage}>
            <Image src={astronaut} alt="" style={{ width: "60%" }} />
          </div>
          <div className={classes.sbsImage}>
            <h3 className={classes.sbsTitle}>Create Ad Copies</h3>
            <p>Because you are only as good as your copy and creative, we ensure that your copy is best-in-class by putting our experience, data analysis, and testing abilities to full use.</p>
            <br />
            <h3 className={classes.sbsTitle}>Landing Page Optimisation</h3>
            <p>We use our unique and proven CRO methods to maximise conversion rates on your website’s advertising landing pages.</p>
          </div>
        </div>
      </Section>
      <CaseStudies />
    </React.Fragment>
  );
};

export default ppc;
