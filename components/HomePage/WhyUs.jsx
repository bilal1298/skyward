import React from "react";
import Section from "../UI/Section";
import Button from "../UI/Button";

const WhyUs = () => {
  return (
    <Section padding={"70px 0"} background={"none"} title={"Skyward Digital Is Your Wingman for All Your Digital Marketing"}>
      <div className="row" style={{ margin: "50px 0" }}>
        <p>
          Measurable Results: If you want to sky-rocket your business to the next level, you’ve found the right digital marketing agency for the job. We will collaborate with you to design a unique
          approach that will assist you in achieving your objectives and generating profitable outcomes rather than just meaningless clicks and followers.
          <br />
          <br /> Transparent Reporting: We’ve developed state-of-the-art dashboards that pull in multi-channel data to keep you abreast of your campaigns’ progress. Our transparent reporting makes it
          easier for you to trust that we are doing our jobs correctly because the proof is always just a click away.
          <br />
          <br /> Multi-channel Approach: Unlike most digital marketing agencies that focus on a singular approach to get leads, we’re different. We dive in deep to understand what drives your target
          audience to convert or buy, and then target them through multiple channels to turn them into customers. Our integrated, focused strategies that involve SEO, PPC, social media advertising,
          and content marketing have an illustrious track record of delivering superior results.
        </p>
      </div>
      <Button href={"/"} position={"center"}>
        Get In Touch
      </Button>
    </Section>
  );
};

export default WhyUs;
