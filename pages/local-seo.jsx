import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import TrustedBy from "../components/HomePage/TrustedBy";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import Section from "../components/UI/Section";
import Button from "../components/UI/Button";
import astronaut from "../public/astronaut.png";
import Image from "next/image";
import FlipBox from "../components/ServicesPage/FlipBox";

const localseo = () => {
  const flipboxItems = [
    {
      title: "Local SEO Audit",
      desc: "In-depth audit of your website, your target audience and industry to understand how we can dominate keywords that have the most potential. Then we carefully craft a strategy to achieve top rankings for those keywords.",
      icon: astronaut,
      href: "/wordpress",
    },
    {
      title: "On page",
      desc: "We integrate your content with the right keyword clusters to ensure that Google associates your website with keywords that are the most important for your business. This process also involves optimising your titles, descriptions, H1s & H2s, images, videos and meta keywords",
      icon: astronaut,
      href: "/shopify",
    },
    {
      title: "Core Local Profiles",
      desc: "We set up and claim your most important local profiles, including Google Business Profile, Bing Local and Yelp. These are integral to your local SEO strategy’s success.",
      icon: astronaut,
      href: "/woocommerce",
    },
    {
      title: "Link building",
      desc: "We don’t build links for the sake of building links. Quality is of paramount consideration when we define a link building strategy. From citations and contextual backlinks for local businesses to manual outreach links and niche edits for enterprise projects, each link is acquired after careful deliberation to keep your website safe from running afoul of Google’s guidelines.",
      icon: astronaut,
      href: "/magento",
    },
    {
      title: "Advanced GBP Optimisations",
      desc: "We perform advanced optimisations to your Google Business Profile like keyword optimised descriptions, geo-tagged images and videos, addition of services and products, among other proprietary tactics that are known to rank profiles on top positions.",
      icon: astronaut,
      href: "/wix",
    },
    {
      title: "NAP consistency",
      desc: "We ensure that your NAP (business name, address, and phone number) is consistent across all sites and listings. This is vital for your local SEO campaign. We leverage high authority sites like Yext, Moz Local, and Foursquare, to keep your NAP updated.",
      icon: astronaut,
      href: "/wix",
    },
    {
      title: "Location pages",
      desc: "If you have more than 1 business location or your business requires us to set up a location-specific service page, we’ll create perfectly optimised local landing pages on your website. Complete with optimised titles, descriptions, headers, schema, images and maps.",
      icon: astronaut,
      href: "/wix",
    },
    {
      title: "Link building",
      desc: "From citations and web 2.0s to guest blog links and niche edits, each link is acquired as a result of a well thought of link acquisition strategy to keep your website safe from running afoul of Google’s guidelines.",
      icon: astronaut,
      href: "/wix",
    },
    {
      title: "Content marketing",
      desc: "We create and propagate topical clustered content through multiple platforms such as, blogs on your own website, content sharing platforms, press releases, guest blogging, infographic websites, podcasts, Google stories and more!",
      icon: astronaut,
      href: "/wix",
    },
  ];
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Strengthen Your Organic Presence With A ROI-Driven SEO Agency"}
        desc={
          <p>
            Get your brick and mortar business ranked on top positions of the Google search results page and maps through our highly effective local SEO services. By ranking high on predominant search
            engines such as Google and Bing, you can practically sky-rocket your store’s footfalls and sales.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <FlipBox
        items={flipboxItems}
        title={"A SEO Game Plan To Get You to the Top"}
        desc={
          <p className="subtitle">
            Take the guesswork out of local SEO with our legit team of local SEO scientists. You can trust us with your local SEO results and get back to running your business. Here’s exactly what we
            will do for you:
          </p>
        }
      />
      <Industries />
      <Testimonials padding={"0 0 70px"} />
      <CaseStudies />
    </React.Fragment>
  );
};

export default localseo;
