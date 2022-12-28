import React from "react";
import classes from "../styles/WhiteLabelServices.module.css";
import Section from "../components/UI/Section";
import Button from "../components/UI/Button";
import Image from "next/image";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import meta from "../public/meta.png";
import google from "../public/google.png";
import microsoft from "../public/microsoft.png";
import tiktok from "../public/tiktok.png";
import australia from "../public/australia.png";
import seamless from "../public/seamlessCommunication.png";
import nohogwash from "../public/nohogwash.png";
import strategy from "../public/strategy.png";
import wlweb from "../public/wlweb.png";
import Pricing from "../components/UI/Pricing";
import Boxes from "../components/UI/Boxes";
import astronaut from "../public/astronaut.png";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";

const whitelabellinkedin = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const flipboxItems = [
    {
      title: "Brand Audit",
      desc: "Before we start building audiences or creatives, we like to take a deep dive into your clients’ industry and brand. We also review their campaign history and learn about their overall digital marketing goals.",
      icon: astronaut,
    },
    {
      title: "Hyper-focused Targeting",
      desc: "We leverage industry leading tools and years of advertising experience to create a highly relevant pool of audience. Then we publish ad campaigns to drive traffic to your clients’ website that converts at significantly higher rates than industry standards.",
      icon: astronaut,
    },
    {
      title: "Captivating Graphics",
      desc: "Our talented graphic design team creates captivating graphics and gripping content to leave a lasting impression on your clients’ target audience. This warms audiences up to brands and helps convert website visitors into buyers.",
      icon: astronaut,
    },
    {
      title: "Landing Pages",
      desc: "We build conversion optimised landing pages on your clients’ websites or landing page builders like Unbounce to deliver highly relevant experiences for visitors. We also analyse traffic to these pages through Hotjar and Microsoft clarity to further refine for better conversion rates.",
      icon: astronaut,
    },
    {
      title: "Tracking",
      desc: "We integrate precise performance tracking into every campaign with the help of LinkedIn analytics, Google Data Studio, and Tag Manager. This ensures that we’re able to track every important event and action on websites - such as calls, form submissions, contact button clicks, video views and anything else worth tracking.",
      icon: astronaut,
    },
    {
      title: "Scaling Up",
      desc: "Our LinkedIn Ads optimisation is an on-going process. We’re constantly on our toes to improve performance metrics, and scale up your clients’ campaigns profitably. ",
      icon: astronaut,
    },
  ];
  return (
    <React.Fragment>
      <section className={classes.whiteLabelBanner}>
        <div className={`container-lg ${classes.heroContainer}`}>
          <div className={classes.heroText}>
            <h1 className="title">
              <span className="titleBackground">Skyrocket</span> your client’s revenue and take all the glory with 100% discreet white label LinkedIn Ads services.
            </h1>
            <br />
            <p>Skyward’s hassle-free white label Google Ads services enable agencies to scale up profitably.</p>
            <br />
            <Button href={"/"}>EXPLORE PLANS & PRICING</Button>
            <br />
            <Image src={meta} alt="" style={{ width: "30%", border: "1px solid #000", borderRadius: "15px", marginTop: "40px", background: "#fff" }} />
          </div>{" "}
          <div className={classes.heroForm}>
            <div className={classes.form}>
              <h3 className="title">Schedule A 20 Min. Free Discovery Call</h3>

              <form onSubmit={submitHandler}>
                <input type="text" name="fullName" id="" placeholder="Full Name" required />
                <input type="text" name="websiteUrl" id="" placeholder="Website URL" required />
                <input type="email" name="email" id="" placeholder="Email" required />
                <input type="tel" name="phone" id="" placeholder="Phone Number" required />

                <button type="submit">Talk to a growth guru</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <NumberStrip />
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
            Take your <span className="titleBackground">agency</span> to the next level. Score more wins with white label LinkedIn Ads.
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

      <Boxes
        items={flipboxItems}
        title={
          <>
            What We Can Do For <span className="titleBackground">You</span>
          </>
        }
        background={"#fff"}
        padding={"70px 0"}
      />

      <Section title={<span className="titleBackground">Pricing</span>} padding={"70px 0"}>
        <Pricing />
      </Section>
      <Section
        title={
          <>
            Partner with the <span className="titleBackground"> growth experts </span>
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <p style={{ width: "50%", margin: "50px auto", textAlign: "center", fontSize: "24px" }}>
          Work with a fully-functional, fast-moving group of LinkedIn experts that can move rapidly and achieve aggressive growth.
        </p>
        <div className={classes.revenueGoals}>
          <Image src={australia} alt="" />
        </div>
        <Button href="/" position={"center"}>
          See Results
        </Button>
      </Section>
      <Section
        padding={"70px 0"}
        title={
          <>
            Getting started is as easy as <span className="titleBackground">A-B-C</span>
          </>
        }
      >
        <div className={classes.abcContainer}>
          <div className={classes.abc}>
            <h2>1</h2>
            <h3>Title</h3>
            <p>Our white label LinkedIn services are designed to achieve authentic business growth. From onboarding to campaign optimisations, our PPC reseller service is thoroughly scalable.</p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>2</h2>
            <h3>Hassle free onboarding</h3>
            <p>Speak to one of our LinkedIn Ads experts, fill in our onboarding questionnaire and you’re all set to go!</p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>3</h2>
            <h3>Results-driven strategy</h3>
            <p>
              With extensive experience across a diverse range of clients in both size and industry, our team of LinkedIn Ads experts know how to optimize your clients’ campaigns to get the best
              results.
            </p>
            <Image src={wlweb} alt="" />
          </div>
        </div>
        <Button href="/" position={"center"}>
          See Results
        </Button>
      </Section>

      <Section
        title={
          <>
            Ready To Take The First Step Towards <span className="titleBackground">Scaling</span> Your Agency?
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <p style={{ width: "50%", margin: "50px auto", textAlign: "center", fontSize: "24px" }}>Agencies face many difficult dilemmas, but partnering with us shouldn't be one of them.</p>
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
      <Testimonials padding={"70px 0"} />
      <CaseStudies background={"#f6f6f6"} />
    </React.Fragment>
  );
};

export default whitelabellinkedin;
