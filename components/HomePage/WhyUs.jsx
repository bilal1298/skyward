import React, { useRef } from "react";
import Section from "../UI/Section";
import Button from "../UI/Button";
import Image from "next/image";
import astronaut from "../../public/astronaut.png";
import moon from "../../public/moon.png";
import classes from "../../styles/WhyUs.module.css";
import { motion, useScroll } from "framer-motion";
import wingman from '../../public/Skyward Digital Is Your Wingman for All Your Digital Marketing.png'

const WhyUs = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <Section padding={"70px 0"} background={"none"} title={"Skyward Digital Is Your Wingman for All Your Digital Marketing"}>
      <div className={classes.whyUs} ref={ref}>
        <div className={`${classes.images}`}>
          {/* <motion.div whileInView={{ x: scrollYProgress.current * 130 + "%" }} className={classes.backImage}>
            <Image src={moon} alt=""/>
          </motion.div> */}
          <motion.div whileInView={{ y: -scrollYProgress.current * 20 + "%" }} className={classes.frontImage}>
            <Image src={wingman} alt=""/>
          </motion.div>
        </div>
        <div className={`${classes.whyUsContent}`} style={{marginTop: '50px'}}>
          <div>
            <h3><strong>Measurable Results</strong></h3>
            <p>
              If you want to sky-rocket your business to the next level, you’ve found the right digital marketing agency for the job. We will collaborate with you to design a unique approach that will
              assist you in achieving your objectives and generating profitable outcomes rather than just meaningless clicks and followers.
            </p>
          </div>
          <div>
            <h3><strong>Transparent Reporting</strong></h3>
            <p>
              We’ve developed state-of-the-art dashboards that pull in multi-channel data to keep you abreast of your campaigns’ progress. Our transparent reporting makes it easier for you to trust
              that we are doing our jobs correctly because the proof is always just a click away.
            </p>
          </div>
          <div>
            <h3><strong>Multi-channel Approach</strong></h3>
            <p>
              Unlike most digital marketing agencies that focus on a singular approach to get leads, we’re different. We dive in deep to understand what drives your target audience to convert or buy,
              and then target them through multiple channels to turn them into customers. Our integrated, focused strategies that involve SEO, PPC, social media advertising, and content marketing have
              an illustrious track record of delivering superior results.
            </p>
          </div>
        </div>
      </div>

      <Button href={"/"} position={"center"}>
        Get In Touch
      </Button>
    </Section>
  );
};

export default WhyUs;
