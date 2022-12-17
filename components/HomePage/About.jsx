import React, { useState, useRef } from "react";
import classes from "../../styles/About.module.css";
import seo from "../../public/seo.svg"
import smm from "../../public/smm.svg"
import ppc from "../../public/ppc.svg"
import webdesign from "../../public/webdesign.svg"
import email from "../../public/email.svg"
import whitelabel from "../../public/whitelabel.svg"
import Section from "../UI/Section";
import Button from "../UI/Button";
import FlipBox from "../ServicesPage/FlipBox";

const About = () => {
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
    <Section padding={"70px 0"} background={"none"} title={"Australia’s Fastest Growing Digital Marketing Agency"}>
      <p className="subtitle">
        We are an all-around digital marketing agency focused on your success. Skyward Digital offers detailed and transparent reporting to measure our strategy in real time so that you can see the
        impact of our marketing tactics.
        <br />
        <br />
        Don’t leave your revenue goals drifting through the universe to infinity and beyond. Instead, transform your business with a clear digital strategy (think: battle plan). Then, fuel your
        pipeline by attracting and converting the right clients.
      </p>
      <Button href={"/"} position={"center"}>
        Get In Touch
      </Button>

      <FlipBox title={'Our Services'} items={flipboxItems} />
    </Section>
  );
};

export default About;
