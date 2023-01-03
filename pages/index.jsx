import React from "react";
import Banner from "../components/HomePage/Banner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import About from "../components/HomePage/About";
import TrustedBy from "../components/HomePage/TrustedBy";
import WhyUs from "../components/HomePage/WhyUs";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import Blog from "../components/HomePage/Blog";
import banner from "../public/banner.png";
import seo from "../public/seo.svg";
import smm from "../public/smm.svg";
import ppc from "../public/ppc.svg";
import webdesign from "../public/webdesign.svg";
import email from "../public/email.svg";
import whitelabel from "../public/whitelabel.svg";
import FlipBox from "../components/ServicesPage/FlipBox";
export default function Home() {
  const flipboxItems = [
    {
      title: "Search Engine Optimization",
      desc: "We provide SEO services that deliver real results. No beating around the bush with metrics like impressions, traffic or clicks. Our ROI-focused strategies focus on the most important metric for your business - conversions. With a range of services from local SEO, E-Commerce SEO to National/International services, we make sure your business is seen.",
      icon: seo,
      href: "/seo",
    },
    {
      title: "Social Media Marketing",
      desc: "Getting likes is easy but it doesn’t help your business generate revenue. We transform businesses into lead generation machines through effective advertising on Facebook, Instagram, and Tik Tok. Cut through the clutter with social campaigns that are designed to keep you one step ahead of the competition.",
      icon: smm,
      href: "/social-media-marketing",
    },
    {
      title: "Pay Per Click Marketing",
      desc: "Turn your ad spend on paid search and social platforms into game changing revenue through our proprietary strategies. We have services with Google ads, Microsoft ads, LinkedIn ads, and whatever platform you want to translate clicks into success.",
      icon: ppc,
      href: "/seo",
    },
    {
      title: "Web Design",
      desc: "Our web design service helps local businesses, service providers, and eCommerce website owners with substandard websites grow their leads, convert more clients and increase revenue. We reimagine your website with cost-effective packages and transparent reporting to ignite your business.",
      icon: webdesign,
      href: "/website-design",
    },
    {
      title: "Email Marketing",
      desc: "Is Email marketing dead? Only if you don’t know how to do it right. Skyward specializes in email marketing strategies that will help you stand out in a cluttered inbox. We offer a range of services from email marketing to email campaign management.",
      icon: email,
      href: "/email-marketing",
    },
    {
      title: "White Label Services",
      desc: "We can support your agency with our white-label service, compromising a dedicated team of developers, designers, and digital marketers. When you partner with Skyward Digital, we help your agency reduce costs and improve productivity. And we know how important your clients are to your agency, so we treat them just like their own.",
      icon: whitelabel,
      href: "/white-label-services",
    },
  ];
  return (
    <React.Fragment>
      <Banner
        title={<h1>Skyrocket Business Growth and Fuel Your Revenue</h1>}
        desc={
          <p>
            Skyward Digital is a full-service Melbourne-based digital marketing agency. Our crew of trusted flight commanders are on a mission to help businesses like yours. We find you the right
            traffic that delivers genuine leads and lands more customers.
            <br />
            <br />
            We grow your business by designing digital marketing strategies and campaigns, including search engine optimisation (SEO), social media marketing, Google Ads, social ads, web design, email
            marketing and white-label services.
            <br />
            <br />
            <strong>Get in touch today to receive a $2000 free audit of your website, let us help you unlock your business' potential!</strong>
          </p>
        }
        heroImg={banner}
        bg={true}
      />
      <NumberStrip />
      <About />
      <FlipBox title={"Our Services"} items={flipboxItems} background={'#fff'}/>
      <TrustedBy />
      <WhyUs />
      <Testimonials padding={"0 0 70px"} />
      <CaseStudies />
      <Industries />
      <Blog />
    </React.Fragment>
  );
}
