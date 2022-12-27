import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import { faRotate, faBoltLightning, faMobile, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import astronaut from "../public/astronaut.png";
import Boxes from "../components/UI/Boxes";
import Section from "../components/UI/Section";
import Image from "next/image";

const logodesign = () => {
  const flipboxItems = [
    {
      title: "Emblem Design",
      desc: "We create beautiful Emblem Designs. We forge text and images to convey recognisable brand identity with the small amount of space an emblem inhabits.",
      icon: astronaut,
      href: "/wordpress",
    },
    {
      title: "Pictorial Marks",
      desc: "We specialise in Pictorial Marks that are original and that convey volumes without the need for words. We can express your brand identity through pictures.",
      icon: astronaut,
      href: "/shopify",
    },
    {
      title: "Wordmarks",
      desc: "Think Google. How do you make basic letters remarkable and memorable? We have the genius to turn simple words into something your customers will remember.",
      icon: astronaut,
      href: "/woocommerce",
    },
    {
      title: "Monogram Logos",
      desc: "How can you use a few strokes or letters to create a Bang!? We can create monograms that can help your brand become easily recognisable. ",
      icon: astronaut,
      href: "/magento",
    },
    {
      title: "Abstract Logo Marks",
      desc: "We have above-the-clouds type imagination and creativity to create amazing Abstract Logo Marks. We think out of the box but also above the current trends.",
      icon: astronaut,
      href: "/wix",
    },
    {
      title: "Mascot Logos",
      desc: "Birthing unique and relatable characters to represent your brand. We not only create mascots that embody your brand but loveable characters that will become stars!",
      icon: astronaut,
      href: "/react",
    },
    {
      title: "Combination Marks",
      desc: "Like the planets that make up the universe, can combine a variety of elements to make combination watermarks that are unique and what you need.",
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
        title={"Creating Memorable Logos That Will Have a High-Impact Landing Within Your Market and the World."}
        desc={
          <p>
            We specialise in a range of logo design services such as Emblems, Pictorial Marks (or logo symbols), Wordmarks, Monogram logos (or lettermarks), abstract Logo Marks, Mascot logos and
            Combination marks. A logo speaks 1000 words. We have the creativity and necessary genius to create logos that become a part of the culture.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <FlipBox
        title={
          <>
            Make A Mark With Custom <span className="titleBackground">Logo Designs</span>
          </>
        }
        desc={<p className="subtitle">Skyward is here to help you forge memorable logos that will help your customers and the world easily recognise you and your brand.</p>}
        padding={"70px 0"}
        items={flipboxItems}
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

export default logodesign;
