import React from "react";
import classes from "../styles/WhiteLabelServices.module.css";
import Section from "../components/UI/Section";
import Boxes from "../components/UI/Boxes";
import Button from "../components/UI/Button";
import Image from "next/image";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import australia from "../public/australia.png";
import seamless from "../public/seamlessCommunication.png";
import nohogwash from "../public/nohogwash.png";
import strategy from "../public/strategy.png";
import wlweb from "../public/wlweb.png";
import Pricing from "../components/UI/Pricing";
import astronaut from "../public/astronaut.png";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import goodfirms from "../public/goodfirms.png";
import trustpilot from "../public/trustpilot.png";
import clutch from "../public/clutchReview.png";

const whitelabelcontent = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const flipboxItems = [
    {
      title: "Website Content",
      desc: "The words your readers are reading should compel them to act! Our content is catchy. We help land readers, revenue and return on your investment. ",
      icon: astronaut,
    },
    {
      title: "Blog Writing",
      desc: "Whatever blog topic, we will help you write original and well-researched content. Your readers want to read engaging material and we help you write that. ",
      icon: astronaut,
    },
    {
      title: "Landing Pages",
      desc: "Create a powerful and strategic landing page that will influence your audience to act! Let them help drive your revenue and the metrics you desire. ",
      icon: astronaut,
    },
    {
      title: "Resume Writing",
      desc: "We help you write resumes that potential employers will make sure to notice and read. Let us amplify your skills to translate to potential employment.",
      icon: astronaut,
    },
    {
      title: "Branding & Advertising",
      desc: " We will forge a brand identity that encapsulates you and is unique. Our honed marketing expertise will also propel your brand or business skyward!",
      icon: astronaut,
    },
    {
      title: "Email Promotions",
      desc: "Email promotions that will stand out in a cluttered inbox. We create email content that will be catchy, and attractive, and drive traffic to you.",
      icon: astronaut,
    },
    {
      title: "Newsletters",
      desc: "Do you want newsletters that your readers will love being subscribed to? Do you want newsletters that are fresh? We can do that for you.",
      icon: astronaut,
    },
    {
      title: "Press Releases",
      desc: "Press releases require expertise that will allow them to be successful. We have the industry experience to help you launch engaging and well-executed press releases. ",
      icon: astronaut,
    },
  ];
  return (
    <React.Fragment>
      <section className={classes.whiteLabelBanner}>
        <div className={`container-lg ${classes.heroContainer}`}>
          <div className={classes.heroText}>
            <h1 className="title">Premium White Label Content Partner</h1>
            <br />
            <p>Skyward’s hassle-free white label content writing services enable agencies to scale up profitably.</p>
            <br />
            <Button href={"/"}>See Our Plans & Pricing</Button>
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
            Trusted By <span className="titleBackground">500+ Clients</span> Across The World
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <p style={{ width: "50%", margin: "50px auto 0", textAlign: "center", fontSize: "24px" }}>
          Supporting agencies from N. America and Europe to Asia and Australia in hundreds of industries and niches.
        </p>
        <div className={classes.partnerLogo}>
          <Image src={clutch} alt="" style={{ padding: "20px" }} />
          <Image src={trustpilot} alt="" style={{ padding: "20px" }} />
          <Image src={goodfirms} alt="" style={{ padding: "20px" }} />
        </div>
      </Section>
      <Section
        title={
          <>
            Take your <span className="titleBackground">agency</span> to the next level. Score more wins with white label PPC.
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

      {/* <FlipBox
        items={flipboxItems}
        title={
          <>
            Our seasoned team of <span className="titleBackground">SEO experts</span> can help you with
          </>
        }
        background={"#fff"}
      /> */}

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
          Work with a fully-functional, fast-moving crew of content writers and copywriters that can move rapidly and achieve aggressive growth.
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
              Our white label content writing services are designed to achieve authentic business growth. From onboarding to website launch, our web design reseller service is thoroughly scalable.
            </p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>2</h2>
            <h3>Hassle free onboarding</h3>
            <p>Speak to one of our onboarding superstars, fill in our questionnaire and you’re all set to go!</p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>3</h2>
            <h3>Results-driven strategy</h3>
            <p>With extensive experience across a diverse range of clients in both size and industry, our team of PPC experts know how to optimize your clients’ campaigns to get the best results.</p>
            <Image src={wlweb} alt="" />
          </div>
        </div>
        <Button href="/" position={"center"}>
          See Results
        </Button>
      </Section>
      <Section padding={"70px 0"} title={<span className="titleBackground">Our content writing process</span>} background={"#fff"}>
        <div className={classes.abcContainer}>
          <div className={classes.abc}>
            <h2>1</h2>
            <h3>Title</h3>
            <p>Our reliable method for producing content writing that stirs readers and helps you achieve goals.</p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>2</h2>
            <h3>Prepare</h3>
            <p>We spend quality time understanding your goals and needs. We cultivate content strategy relevant to brand identity and desired outcomes. Preparation is where success begins. </p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>3</h2>
            <h3>Lift off</h3>
            <p>Let the work begin! This is where our skilled team uses our breadth of talent to start producing writing and content that will empower you.</p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>4</h2>
            <h3>The Journey</h3>
            <p>Content writing is a journey. That journey includes the production, promotion, and revision of content. We will be with you every step of the way.</p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>5</h2>
            <h3>Land</h3>
            <p>We spend time utilising our services to help your business land successfully. We specialise in strategies like SEO writing to achieve your desired results.</p>
            <Image src={wlweb} alt="" />
          </div>
          <div className={classes.abc}>
            <h2>6</h2>
            <h3>Propel</h3>
            <p>There is more to be done than just producing content. We take the finished product and propel it towards a wider reach and greater success.</p>
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
      >
        <p style={{ width: "50%", margin: "50px auto", textAlign: "center", fontSize: "24px" }}>Agencies face many difficult dilemmas, but partnering with us shouldn't be one of them.</p>
        <div className={classes.agencyBoxes}>
          <div className={classes.agencyBox}>
            <h3>Agency Growth</h3>
            <p>Grow and scale your agency with our Australia-managed team, supercharged client support, and industry-leading SOPs.</p>
            <Image src={australia} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Client Growth</h3>
            <p>You'll receive the credit and be the hero to your clients with our behind-the-scenes work.</p>
            <Image src={seamless} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Full Support</h3>
            <p>Partnering with us provides you access to our full, Australia-managed team of leadership and specialists.</p>
            <Image src={nohogwash} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Stress Free</h3>
            <p>White label is a no brainer. No in-house hassles, training, raises, bonuses, benefits, taxes, or other headaches.</p>
            <Image src={strategy} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>100% Discreet</h3>
            <p>We sign iron-clad NDAs with clients to ensure your peace of mind. Customer poaching is just not us.</p>
            <Image src={strategy} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Reporting Dashboards</h3>
            <p>Live, white labeled reporting dashboards to stay on top of all important metrics.</p>
            <Image src={strategy} alt="" />
          </div>
        </div>
        <Button href="/" position={"center"}>
          Let's Talk
        </Button>
      </Section>
      <Section title={<span className="titleBackground">Pricing</span>} padding={"70px 0"} background={"#fff"}>
        <Pricing />
      </Section>
      <Boxes
        items={flipboxItems}
        title={
          <>
            <span className="titleBackground">Content writing</span> that is sharp, concise and that communicates powerfully.
          </>
        }
        desc={
          <p className="subtitle">
            Description: Writing is powerful if utilised correctly. We specialise in a universe of services including website content, blog writing, landing pages, resume writing, brand and
            advertising, email promotions, newsletters, and press releases. We employ our own in-house content writing strategy to produce quality and powerful writing to propel your brand forward.
            Whether it’s a website or an email promotion, our content writing will launch your desired message in a way that will land with your readers.
          </p>
        }
        padding={"70px 0"}
      >
        <Button href="/">Let's Talk</Button>
      </Boxes>
      <Testimonials padding={"70px 0"} background={"#fff"} />
    </React.Fragment>
  );
};

export default whitelabelcontent;
