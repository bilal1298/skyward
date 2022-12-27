import React from "react";
import classes from "../styles/whitelabel.module.css";
import Section from "../components/UI/Section";
import Button from "../components/UI/Button";
import bannerl from "../public/wlbannerl.png";
import bannerr from "../public/wlbannerr.png";
import Image from "next/image";
import meta from "../public/meta.png";
import google from "../public/google.png";
import microsoft from "../public/microsoft.png";
import tiktok from "../public/tiktok.png";
import australia from "../public/australia.png";
import seamless from "../public/seamlessCommunication.png";
import nohogwash from "../public/nohogwash.png";
import strategy from "../public/strategy.png";
import wlseo from "../public/wlseo.png";
import wlppc from "../public/wlppc.png";
import wlweb from "../public/wlweb.png";
import wlcontent from "../public/wlcontent.png";
import Pricing from "../components/UI/Pricing";

const whitelabel = () => {
  return (
    <React.Fragment>
      <section className={classes.whiteLabelBanner}>
        <div className="container-lg">
          <h1>
            Grow Your Agency Faster With <span className="titleBackground">White Label</span> Web Design, Seo, Google Ads, Facebook Ads, Linkedin Ads, Microsoft Ads And Tiktok Ads{" "}
          </h1>
          <p>Skyward’s hassle-free white label services enable agencies to scale up profitably.</p>
          <Button href={"/"}>EXPLORE PLANS & PRICING</Button>
        </div>
        <Image src={bannerl} alt="" />
        <Image src={bannerr} alt="" />
      </section>
      <Section
        title={
          <>
            Trusted By <span className="titleBackground">700+ Clients</span> Across The World
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <p style={{ width: "50%", margin: "50px auto 0", textAlign: "center", fontSize: "24px" }}>
          Supporting agencies from N. America and Europe to Asia and Australia in hundreds of industries and niches.
        </p>
        <div className={classes.partnerLogo}>
          <Image src={meta} alt="" />
          <Image src={microsoft} alt="" />
          <Image src={tiktok} alt="" />
          <Image src={google} alt="" />
        </div>
      </Section>
      <Section
        title={
          <>
            <span className="titleBackground">Industry-Leading</span> White Label Services And Peerless Support
          </>
        }
        padding={"70px 0"}
      >
        <div className={classes.industryBoxes}>
          <div className={classes.industryBox}>
            <h3>100% Australia Managed</h3>
            <p>Provide your clients with superior-quality services with our 100% Australia managed team.</p>
            <Image src={australia} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>Seamless Communication</h3>
            <p>Our experts are always available on Slack for you. We pride ourselves on our lightning-quick response times and after hour support.</p>
            <Image src={seamless} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>No Hogwash</h3>
            <p>We don’t do contracts, setup fees, or hidden costs.</p>
            <Image src={nohogwash} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>Battle-tested Strategies</h3>
            <p>Get the most effective and innovative white label services for your clients.</p>
            <Image src={strategy} alt="" />
          </div>
        </div>
        <Button href="/" position={"center"}>
          EXPLORE PLANS & PRICING
        </Button>
      </Section>
      <Section
        title={
          <>
            Make More <span className="titleBackground">Money</span> With Less Work And Have Happy Clients
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <div className={classes.whiteLabelBoxes}>
          <div className={classes.whiteLabelBox}>
            <h3>White Label SEO</h3>
            <Image src={wlseo} alt="" />
            <Button href="/white-label-seo">Learn More</Button>
          </div>
          <div className={classes.whiteLabelBox}>
            <h3>White Label PPC</h3>
            <Image src={wlppc} alt="" />
            <Button href="/white-label-ppc">Learn More</Button>
          </div>
          <div className={classes.whiteLabelBox}>
            <h3>White Label Web Design</h3>
            <Image src={wlweb} alt="" />
            <Button href="/white-label-web-design">Learn More</Button>
          </div>
          <div className={classes.whiteLabelBox}>
            <h3>White Label Content Writing</h3>
            <Image src={wlcontent} alt="" />
            <Button href="/white-label-content-writing">Learn More</Button>
          </div>
        </div>
      </Section>
      <Section
        title={
          <>
            Ready To Take The First Step Towards <span className="titleBackground">Scaling</span> Your Agency?
          </>
        }
        padding={"70px 0"}
      >
        <p className="subtitle">Agencies face many difficult dilemmas, but partnering with us shouldn't be one of them.</p>
        <div className={classes.industryBoxes}>
          <div className={classes.industryBox}>
            <h3>Agency Growth</h3>
            <p>Grow and scale your agency with our Australia-managed team, supercharged client support, and industry-leading SOPs.</p>
            <Image src={australia} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>Client Growth</h3>
            <p>You'll receive the credit and be the hero to your clients with our behind-the-scenes work.</p>
            <Image src={seamless} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>Full Support</h3>
            <p>Partnering with us provides you access to our full, Australia-managed team of leadership and specialists.</p>
            <Image src={nohogwash} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>Stress Free</h3>
            <p>White label is a no brainer. No in-house hassles, training, raises, bonuses, benefits, taxes, or other headaches.</p>
            <Image src={strategy} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>100% Discreet</h3>
            <p>We sign iron-clad NDAs with clients to ensure your peace of mind. Customer poaching is just not us.</p>
            <Image src={strategy} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>Reporting Dashboards</h3>
            <p>Live, white labeled reporting dashboards to stay on top of all important metrics.</p>
            <Image src={strategy} alt="" />
          </div>
        </div>
        <Button href="/" position={"center"}>
          TALK TO US
        </Button>
      </Section>
      <Section title={<span className="titleBackground">Pricing</span>} padding={"70px 0"} background={"#fff"}>
        <Pricing />
      </Section>
      <Section
        title={
          <>
            Don’t Leave Your <span className="titleBackground">Revenue Goals</span> Drifting Through The Galaxy To Infinity And Beyond.
          </>
        }
        padding={"70px 0"}
      >
        <p style={{ width: "50%", margin: "50px auto", textAlign: "center", fontSize: "24px" }}>Our crew of trusted flight commanders are on a mission to help businesses like yours.</p>
        <div className={classes.revenueGoals}>
          <Image src={australia} alt="" />
        </div>
        <Button href="/" position={"center"}>
          See Results
        </Button>
      </Section>
    </React.Fragment>
  );
};

export default whitelabel;
