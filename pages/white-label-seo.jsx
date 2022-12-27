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
import FlipBox from "../components/ServicesPage/FlipBox";
import Boxes from "../components/UI/Boxes";
import astronaut from "../public/astronaut.png";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";

const whitelabelseo = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const flipboxItems = [
    {
      title: "SEO audit",
      desc: "Our 100% manual, actionable SEO audit will Identify issues and improvement opportunities for your clients that no tools can find. Get in-depth on-site audit reports in a palatable format that will enable you to prioritize your clients’ SEO optimization needs effectively.",
      icon: astronaut,
    },
    {
      title: "Local SEO",
      desc: "We create an integrated local SEO strategy for your clients using on-page optimization tactics, manual outreach, citation building and cleaning, review-earning techniques, and more. Let us enhance your local SEO services by drawing more attention to your clients on local search results and Google Maps.",
      icon: astronaut,
    },
    {
      title: "Ecommerce",
      desc: "Get cutting edge eCommerce SEO solutions for online stores of all sizes. Our ecommerce SEO experts will help you increase your eCommerce SEO bandwidth through swift and effective strategies.",
      icon: astronaut,
    },
    {
      title: "Global SEO",
      desc: "We improve your website’s global rankings making it both accessible and comprehensible to your target audience. This is achieved through employing a meticulously planned SEO process that includes industry-leading technical SEO best practices, a proprietary keyword research process, top-notch on site SOPs, and acquiring high authority links through manual outreach.",
      icon: astronaut,
    },
    {
      title: "Content Marketing",
      desc: "Utilize our services to produce and distribute your clients’ content such as blogs, videos, podcasts, and other material to attract, retain, and grow an audience. When it's time to buy what you sell, people will think of your company first thanks to this strategy's promotion of brand awareness and establishment of competence.",
      icon: astronaut,
    },
    {
      title: "Citations",
      desc: "Business citations are crucial to your website’s local SEO success. We build relevance and prominence using high authority citations, and maximize their effectiveness by indexing them through our special strategy.",
      icon: astronaut,
    },
    {
      title: "Link Building",
      desc: "Integrate white hat link building techniques into your digital marketing strategy to increase your site's indexability, attract more relevant visitors, and strengthen brand recognition.",
      icon: astronaut,
    },
  ];
  return (
    <React.Fragment>
      <section className={classes.whiteLabelBanner}>
        <div className={`container-lg ${classes.heroContainer}`}>
          <div className={classes.heroText}>
            <h1 className="title">
              <span className="titleBackground">Skyrocket</span> your client’s revenue and take all the glory with 100% discreet white label SEO services.
            </h1>
            <br />
            <p>Skyward’s hassle-free white label services enable agencies to scale up profitably.</p>
            <br />
            <Button href={"/"}>EXPLORE PLANS & PRICING</Button>
          </div>{" "}
          <div className={classes.heroForm}>
            <div className={classes.form}>
              <h3 className="title">Get a free audit</h3>
              <p>100% Transparency, No BS, No dodgy stuff. Just pure results.</p>
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
            Take your <span className="titleBackground">agency</span> to the next level. Score more wins with white label SEO.
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
            Our seasoned team of <span className="titleBackground">SEO experts</span> can help you with
          </>
        }
        background={"#fff"}
        padding={'70px 0'}
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
          Work with a fully-functional, fast-moving group of SEO experts that can move rapidly and achieve aggressive growth
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
            <p>
              Our white label SEO services are designed to achieve authentic business growth. From creating high-volume links to impactful keyword optimisations, our SEO reseller service is thoroughly
              scalable.
            </p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>2</h2>
            <h3>Hassle free onboarding</h3>
            <p>Speak to one of our SEO experts, fill in our onboarding questionnaire and you’re all set to go!</p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>3</h2>
            <h3>Results-driven strategy</h3>
            <p>With extensive experience across a diverse range of clients in both size and industry, our team of SEO experts know how to optimize your clients’ campaigns to get the best results.</p>
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
      <Section title={<span className="titleBackground">Pricing</span>} padding={"70px 0"}>
        <Pricing />
      </Section>
      <Testimonials padding={"70px 0"} background={"#fff"} />
      <CaseStudies background={"#f6f6f6"} />
    </React.Fragment>
  );
};

export default whitelabelseo;
