import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import astronaut from "../public/astronaut.png";
import Boxes from "../components/UI/Boxes";
import Section from "../components/UI/Section";
import Image from "next/image";

const graphicdesign = () => {
  const flipboxItems = [
    {
      title: "Graphic Design",
      desc: "We create Graphic Design that is unique, and creative but also practical. We will help you to stand out in a world saturated with images.",
      icon: astronaut,
      href: "/wordpress",
    },
    {
      title: "Logo Design",
      desc: "We know how to create simple but unique logos. Whatever your brand story is, we know how to create a dynamic and memorable logo for it.",
      icon: astronaut,
      href: "/shopify",
    },
    {
      title: "Web Design",
      desc: "Web design expertise that will make your website a launchpad for connection and success. We create web designs with aesthetic appeal that is user-friendly.",
      icon: astronaut,
      href: "/woocommerce",
    },
    {
      title: "UI and UX",
      desc: "UI/UX design that is smooth and seamless. We know people and their habits. Our UI/UX design will help your customers navigate your site with ease.",
      icon: astronaut,
      href: "/magento",
    },
    {
      title: "Brand Identity",
      desc: "How do you want to present your brand to the public? We will help you answer this important question and forge a powerful identity.",
      icon: astronaut,
      href: "/wix",
    },
    {
      title: "Packaging Design",
      desc: "Eye-grabbing packaging designs with the right colour, image, and typography to convey a unique product story. We enable your product to stand out from the crowd.",
      icon: astronaut,
      href: "/react",
    },
    {
      title: "Label Design",
      desc: "We specialise in label design. We utilise creativity, technique, skills, and expertise to design and construct a sharp and original label for your brand.",
      icon: astronaut,
      href: "/react",
    },
  ];
  const briefItems = [
    {
      title: "Brief",
      desc: "From the moment we receive a brief, we are ready for take-off! We will work with your vision, needs and goals to deliver results.",
      icon: astronaut,
    },
    {
      title: "Brainstorming",
      desc: "We will brainstorm to help curate a potential melting pot of thoughts. We will identify the best strategies and ideas for the journey ahead.",
      icon: astronaut,
    },
    {
      title: "Execution",
      desc: "We are more than just innovative and creative! Our Skyward team has the skill, industry expertise and drive to execute your goals and achieve results.",
      icon: astronaut,
    },
    {
      title: "Revision",
      desc: "Just like a planet in orbit that never stops, we will work tirelessly with you. We revise to get exactly what you need and want.",
      icon: astronaut,
    },
    {
      title: "Delivery",
      desc: "We deliver creative and memorable designs and help you achieve market impact. We are dedicated to launching you above the rest and taking you Skyward!",
      icon: astronaut,
    },
  ];
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Using Innovative Graphic Design To Take Your Business or Brand to New Heights!"}
        desc={
          <p>
            Design is no longer just about creating. The world is moving fast and is saturated with information. In this climate, we will be your wingman! We will equip you with the tools you need to
            not only stand out from the crowd but reach high in the sky.
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
            We create <span className="titleBackground">Graphic Design</span> that is fresh, innovative and makes an impact
          </>
        }
        desc={
          <p className="subtitle">
            At Skyward, we offer a range of Graphic Design services including logo design, web design, UI/UX design, brand identity, packaging design and label design. We have years of industry
            expertise with our team’s knowledge of design and customer trends. We use Graphic Design to tell powerful stories and to shape brand identity. Skyward is here to help you make a strong
            market impact with unique and creative designs that can carry simple but high-octane messages.
          </p>
        }
        height={"300px"}
      />
      <Section
        title={
          <>
            Some of Our <span className="titleBackground">Work</span>
          </>
        }
        padding={"70px 0"}
        background={"#EBF5FF"}
      >
        <div style={{ textAlign: "center" }}>
          <Image src={astronaut} alt="" style={{ marginTop: "50px", width: "20%" }} />
        </div>
      </Section>

      <Boxes
        title={
          <>
            Our Lifecycle for <span className="titleBackground">Graphic Design</span> Services
          </>
        }
        padding={"70px 0"}
        items={briefItems}
      />

      <Testimonials padding={"70px 0"} background={"#fff"} />
    </React.Fragment>
  );
};

export default graphicdesign;
