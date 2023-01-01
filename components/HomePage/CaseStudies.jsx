import React from "react";
import Section from "../UI/Section";
import Link from "next/link";
import classes from "../../styles/CaseStudies.module.css";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const CaseStudies = ({ background }) => {
  return (
    <Section padding={"70px 0"} background={background ? background : "#002eff"} title={<>Case <span className="titleBackground">Studies</span></>} color={"#fff"}>
      <Swiper
        className="caseStudiesSwiper"
        style={{ padding: "35px" }}
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className={classes.caseStudy}>
            <div className={classes.title}>
              <h3>Case Study</h3>
            </div>
            <div className={classes.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                officiis officia voluptates, excepturi facere eaque amet laudantium.
              </p>
            </div>
            <Link className={classes.readMore} href="/">
              Read More
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.caseStudy}>
            <div className={classes.title}>
              <h3>Case Study</h3>
            </div>
            <div className={classes.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                officiis officia voluptates, excepturi facere eaque amet laudantium.
              </p>
            </div>
            <Link className={classes.readMore} href="/">
              Read More
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.caseStudy}>
            <div className={classes.title}>
              <h3>Case Study</h3>
            </div>
            <div className={classes.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                officiis officia voluptates, excepturi facere eaque amet laudantium.
              </p>
            </div>
            <Link className={classes.readMore} href="/">
              Read More
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.caseStudy}>
            <div className={classes.title}>
              <h3>Case Study</h3>
            </div>
            <div className={classes.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                officiis officia voluptates, excepturi facere eaque amet laudantium.
              </p>
            </div>
            <Link className={classes.readMore} href="/">
              Read More
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.caseStudy}>
            <div className={classes.title}>
              <h3>Case Study</h3>
            </div>
            <div className={classes.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                officiis officia voluptates, excepturi facere eaque amet laudantium.
              </p>
            </div>
            <Link className={classes.readMore} href="/">
              Read More
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.caseStudy}>
            <div className={classes.title}>
              <h3>Case Study</h3>
            </div>
            <div className={classes.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                officiis officia voluptates, excepturi facere eaque amet laudantium.
              </p>
            </div>
            <Link className={classes.readMore} href="/">
              Read More
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default CaseStudies;
