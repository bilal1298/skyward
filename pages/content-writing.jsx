import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import astronaut from "../public/astronaut.png";
import Boxes from "../components/UI/Boxes";
import Section from "../components/UI/Section";
import Image from "next/image";

const contentwriting = () => {
  const flipboxItems = [
    {
      title: "Website Content",
      desc: "The words your readers are reading should compel them to act! Our content is catchy. We help land readers, revenue and return on your investment. ",
      icon: astronaut,
      href: "/wordpress",
    },
    {
      title: "Blog Writing",
      desc: "Whatever blog topic, we will help you write original and well-researched content. Your readers want to read engaging material and we help you write that. ",
      icon: astronaut,
      href: "/shopify",
    },
    {
      title: "Landing Pages",
      desc: "Create a powerful and strategic landing page that will influence your audience to act! Let them help drive your revenue and the metrics you desire. ",
      icon: astronaut,
      href: "/woocommerce",
    },
    {
      title: "Resume Writing",
      desc: "We help you write resumes that potential employers will make sure to notice and read. Let us amplify your skills to translate to potential employment.",
      icon: astronaut,
      href: "/magento",
    },
    {
      title: "Branding & Advertising",
      desc: " We will forge a brand identity that encapsulates you and is unique. Our honed marketing expertise will also propel your brand or business skyward!",
      icon: astronaut,
      href: "/wix",
    },
    {
      title: "Email Promotions",
      desc: "Email promotions that will stand out in a cluttered inbox. We create email content that will be catchy, and attractive, and drive traffic to you.",
      icon: astronaut,
      href: "/react",
    },
    {
      title: "Newsletters",
      desc: "Do you want newsletters that your readers will love being subscribed to? Do you want newsletters that are fresh? We can do that for you.",
      icon: astronaut,
      href: "/react",
    },
    {
      title: "Press Releases",
      desc: "Press releases require expertise that will allow them to be successful. We have the industry experience to help you launch engaging and well-executed press releases. ",
      icon: astronaut,
      href: "/react",
    },
  ];
  const briefItems = [
    {
      title: "Title",
      desc: "Our reliable method for producing content writing that stirs readers and helps you achieve goals.",
      icon: astronaut,
    },
    {
      title: "Prepare",
      desc: "We spend quality time understanding your goals and needs. We cultivate content strategy relevant to brand identity and desired outcomes. Preparation is where success begins.",
      icon: astronaut,
    },
    {
      title: "Lift off",
      desc: "Let the work begin! This is where our skilled team uses our breadth of talent to start producing writing and content that will empower you.",
      icon: astronaut,
    },
    {
      title: "The Journey",
      desc: "Content writing is a journey. That journey includes the production, promotion, and revision of content. We will be with you every step of the way. ",
      icon: astronaut,
    },
    {
      title: "Land",
      desc: "We spend time utilising our services to help your business land successfully. We specialise in strategies like SEO writing to achieve your desired results.",
      icon: astronaut,
    },
    {
      title: "Propel",
      desc: "There is more to be done than just producing content. We take the finished product and propel it towards a wider reach and greater success.",
      icon: astronaut,
    },
  ];
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Premium Copywriting Agency"}
        desc={
          <p>
            Don’t be saying what everyone else is. Say what you want and convert words to powerful messages or revenue. We offer a range of content writing services. From website content to a resume,
            or a press release, we offer content that speaks volumes and converts words to a high ROI.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <FlipBox
        items={flipboxItems}
        title={
          <>
            We create <span className="titleBackground">Content Writing</span> That Is Sharp, Concise and That Communicates Powerfully.
          </>
        }
        desc={
          <p className="subtitle">
            Writing is powerful if utilised correctly. We specialise in a universe of services including website content, blog writing, landing pages, resume writing, brand and advertising, email
            promotions, newsletters, and press releases. We employ our own in-house content writing strategy to produce quality and powerful writing to propel your brand forward. Whether it’s a
            website or an email promotion, our content writing will launch your desired message in a way that will land with your readers.
          </p>
        }
        height={"300px"}
      />

      <Boxes
        title={
          <>
            Our content writing <span className="titleBackground">process</span>
          </>
        }
        padding={"70px 0"}
        items={briefItems}
        background={'#EBF5FF'}
      />

      <Testimonials padding={"70px 0"} background={"#fff"} />
    </React.Fragment>
  );
};

export default contentwriting;
