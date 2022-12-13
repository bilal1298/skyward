import React from "react";
import Section from "../UI/Section";
import Button from "../UI/Button";
import classes from "../../styles/CaseStudies.module.css";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const CaseStudies = () => {
  return (
    <Section padding={"70px 0"} background={"#fece1a"} title={"Case Studies"}>
      <Swiper
        className='caseStudiesSwiper'
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
            <Button href="/">Read More</Button>
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
            <Button href="/">Read More</Button>
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
            <Button href="/">Read More</Button>
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
            <Button href="/">Read More</Button>
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
            <Button href="/">Read More</Button>
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
            <Button href="/">Read More</Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default CaseStudies;
