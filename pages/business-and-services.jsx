import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import Section from "../components/UI/Section";
import Boxes from "../components/UI/Boxes";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import { faRotate, faBoltLightning, faMobile, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress, faShopify, faMagento, faWix, faReact, faLaravel, faPhp } from "@fortawesome/free-brands-svg-icons";

const business = () => {
  const flipboxItems = [
    {
      title: "Real Estate",
      desc: "Generate quality leads with helpful, educational content on your website. You can increase your brand and build trust with future buyers and renters.",
      icon: faWordpress,
    },
    {
      title: "Jewellery ",
      desc: "Most people search online for a unique piece to add to their collection. A clean, elegant website helps customers imagine how it feels to wear your jewellery.",
      icon: faShopify,
    },
    {
      title: "Law",
      desc: "When looking for a lawyer, most people start with Google. However, having a professional website with authoritative content, testimonials, and your professional background can lead to increased consultations.",
      icon: faLaravel,
    },
    {
      title: "Travel",
      desc: "Everyone loves a holiday, and your website can position you as an expert in travel. Share testimonials alongside inspirational and immersive content to excite future explorers.",
      icon: faMagento,
    },
    {
      title: "Accountant",
      desc: "An accountant's website should portray trust, competence and expertise. For example, you could share tips about tax and bookkeeping to educate customers, helping position you as a trusted partner.",
      icon: faWix,
    },
    {
      title: "Carpet Cleaning",
      desc: "Your website can connect with future customers by answering frequently asked questions (FAQs). And when they are ready for a quote, direct them to a simple form to complete.",
      icon: faReact,
    },
    {
      title: "Painting",
      desc: "Sure, customers will find you on social media. But you need a dedicated website to showcase your projects and demonstrate you are the local expert.",
      icon: faReact,
    },
    {
      title: "Tiles and Grouting",
      desc: "Your website allows you to show before and after photos of recent projects. It’s a practical way to show the impact of your work, generating more leads.",
      icon: faReact,
    },
    {
      title: "Plumbing",
      desc: "Make it easy to reach you with a clickable phone or email when they need urgent help. And for larger ongoing projects, your website can highlight your previous work.",
      icon: faReact,
    },
    {
      title: "Roofing",
      desc: "A roofing website should be easy to navigate, make it simple to contact you and demonstrate trust. For example, you can build trust with video testimonials.",
      icon: faReact,
    },
    {
      title: "& More!",
      desc: "Do you have another type of business or service? Contact us for a no-obligation discussion about your next website design.",
      icon: faReact,
    },
  ];
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Like gravity, a business website attracts the right customers to you"}
        desc={
          <p>
            A website is more than a glossy brochure if you’re a small business, service provider or tradie. You may think you can rely on social media, but a website establishes your credibility and
            can deliver your leads 24/7.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <Section
        title={
          <>
            We work with you to ensure that your business website is interactive, enhances your brand, attracts your target audience and converts visitors into{" "}
            <span className="titleBackground">happy</span> clients.
          </>
        }
        padding={'70px 0 0'}
      >
        <BriefService
          tab1i={<FontAwesomeIcon icon={faRotate} color={"#002eff"} fontSize={"30px"} />}
          tab1t={"Cross-browser compatible"}
          tab1d={"Our designs work seamlessly on all popular browsers like Google Chrome, Safari, Internet Explorer, & Firefox, among others."}
          tab2i={<FontAwesomeIcon icon={faMobile} color={"#002eff"} fontSize={"30px"} />}
          tab2t={"Mobile Friendly"}
          tab2d={"We create websites that adapt flawlessly to various screen sizes, and across devices like mobiles, tablets and PCs."}
          tab3i={<FontAwesomeIcon icon={faBoltLightning} color={"#002eff"} fontSize={"30px"} />}
          tab3t={"Lightning Fast"}
          tab3d={"We design lightning fast websites that both search engines and users love."}
          tab4i={<FontAwesomeIcon icon={faGaugeSimpleHigh} color={"#002eff"} fontSize={"30px"} />}
          tab4t={"Conversion Optimised"}
          tab4d={"Our high-performance website designs are engineered to convert browsers into buyers."}
          title={""}
          desc={
            <p className="subtitle">
              A responsive, fast and customer-centric website can fuel your inbound marketing activities by creating content such as blogs, case studies, infographics or long-form articles.
              <br />
              <br />
              With a clear marketing strategy, your website can allow more time to focus on helping clients, build referral relationships and generate more revenue.
            </p>
          }
        />
      </Section>
      <Boxes
        items={flipboxItems}
        title={
          <>
            Your dependable salesperson helping, educating and selling for your <span className="titleBackground">business</span> 24/7
          </>
        }
        desc={
          <p className="subtitle">
            If you're a local jeweller or tradie, you may have questioned why you need a website.
            <br />
            <br />
            The thing is, you're likely to be one of many jewellers or painters in town. So having a credible online presence is critical to standing out. It helps make a positive first impression and
            shows you're a legitimate business.
            <br />
            <br />
            And with a sound marketing plan, you can generate leads to your website with paid ads or organic traffic. As a result, you can target the most qualified leads, providing an excellent ROI
          </p>
        }
        background={"#fff"}
        padding={"70px 0"}
      />
      <Testimonials padding={"70px 0"} />
      <CaseStudies />
    </React.Fragment>
  );
};

export default business;
