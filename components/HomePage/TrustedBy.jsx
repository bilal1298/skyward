import React from "react";
import clients from "../../public/clients.png";
import Image from "next/image";
import Section from "../UI/Section";

const TrustedBy = () => {
  return (
    <Section padding={"70px 0"} background={"#ebf5ff"} title={"Trusted By"}>
      <Image src={clients} alt="" style={{marginTop: '50px'}} />
    </Section>
  );
};

export default TrustedBy;
