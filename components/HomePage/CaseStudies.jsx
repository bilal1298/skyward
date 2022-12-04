import React from "react";
import Image from "next/image";
import caseStudy from "../../public/caseStudy.jpg";
import Section from "../UI/Section";
import Button from "../UI/Button";

const CaseStudies = () => {
  return (
    <Section padding={"70px 0"} background={"#fff9e5"} title={"Case Studies"}>
      <div className={`container`} style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-3">
            <div className="card">
              <Image src={caseStudy} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <Button href={"/"}>Get In Touch</Button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <Image src={caseStudy} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <Button href={"/"}>Get In Touch</Button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <Image src={caseStudy} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <Button href={"/"}>Get In Touch</Button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <Image src={caseStudy} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <Button href={"/"}>Get In Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CaseStudies;
