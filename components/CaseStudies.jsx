import React from "react";
import classes from "../styles/CaseStudies.module.css";
import Link from "next/link";
import Image from "next/image"; 
import caseStudy from '../public/caseStudy.jpg'

const CaseStudies = () => {
  return (
    <section className={classes.caseStudies}>
      <h2 className="title">Case Studies</h2>
      <div className={`container ${classes.cases}`}>
        <div className="row">
          <div className="col-3">
            <div className="card">
              <Image src={caseStudy} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <Link href={"/"} className="my-button">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <Image src={caseStudy} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <Link href={"/"} className="my-button">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <Image src={caseStudy} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <Link href={"/"} className="my-button">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <Image src={caseStudy} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <Link href={"/"} className="my-button">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
