import React, { useState } from "react";
import classes from "../../styles/Testimonials.module.css";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import Section from "../UI/Section";

const testimonials = [
  {
    name: "Dwayne Johnson",
    designation: "Black Adam",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti laborum dolore tempore exercitationem molestiae quibusdam, eligendi impedit obcaecati, delectus, dolores dignissimos! Distinctio quisquam, sequi pariatur explicabo ipsam officiis error.",
    video: "https://www.youtube.com/embed/X0tOpBuYasI",
  },
  {
    name: "Daniel Craig",
    designation: "Glass Onion",
    text: "Ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti laborum dolore tempore exercitationem molestiae quibusdam, eligendi impedit obcaecati, delectus, dolores dignissimos! Distinctio quisquam, sequi pariatur explicabo ipsam officiis error.",
    video: "https://www.youtube.com/embed/4Ba6CmGPbz4",
  },
  {
    name: "Keanu Reeves",
    designation: "John Wick",
    text: "Dolor sit amet consectetur adipisicing elit. Ipsa deleniti laborum dolore tempore exercitationem molestiae quibusdam, eligendi impedit obcaecati, delectus, dolores dignissimos! Distinctio quisquam, sequi pariatur explicabo ipsam officiis error.",
    video: "https://www.youtube.com/embed/qEVUtrk8_B4",
  },
  {
    name: "Sam Worthington",
    designation: "Avatar",
    text: "Sit amet consectetur adipisicing elit. Ipsa deleniti laborum dolore tempore exercitationem molestiae quibusdam, eligendi impedit obcaecati, delectus, dolores dignissimos! Distinctio quisquam, sequi pariatur explicabo ipsam officiis error.",
    video: "https://www.youtube.com/embed/o5F8MOz_IDw",
  },
];

const Testimonials = ({padding, background}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <Section padding={padding} background={background} title={<span className={"titleBackground"}>Testimonials</span>}>
      <div className={classes.testimonialsContainer}>
        <div className={classes.videos}>
          <div className={`${classes.video} ${classes.active}`}>
            <motion.iframe
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="testimonial-iframe"
              width="100%"
              height="500px"
              src={testimonials[currentTestimonial].video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></motion.iframe>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.headingText}>
            <h3>What People Says</h3>
            <FontAwesomeIcon icon={faQuoteRight} style={{ fontSize: "50px" }} />
          </div>
          <div className={`${classes.testimonial} ${classes.active}`}>
            <div className={classes.testimonialData}>
              <p>{testimonials[currentTestimonial].text}</p>
              <h3>{testimonials[currentTestimonial].name}</h3>
              <p>{testimonials[currentTestimonial].designation}</p>
            </div>
            <div className={classes.imagesContainer}>
              <div className={classes.images}>
                <Swiper className="testimonialSwiper" modules={[Navigation]} spaceBetween={50} slidesPerView={3} navigation>
                  <SwiperSlide>
                    <div>
                      <Image className={`${currentTestimonial === 0 ? classes.active : undefined}`} onClick={() => setCurrentTestimonial(0)} src={profile} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <Image className={`${currentTestimonial === 1 ? classes.active : undefined}`} onClick={() => setCurrentTestimonial(1)} src={profile} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <Image className={`${currentTestimonial === 2 ? classes.active : undefined}`} onClick={() => setCurrentTestimonial(2)} src={profile} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <Image className={`${currentTestimonial === 3 ? classes.active : undefined}`} onClick={() => setCurrentTestimonial(3)} src={profile} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
