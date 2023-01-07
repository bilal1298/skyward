import React from "react";
import classes from "../styles/DentalDigital.module.css";
import Section from "../components/UI/Section";
import Boxes from "../components/UI/Boxes";
import Button from "../components/UI/Button";
import Image from "next/image";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import australia from "../public/australia.png";
import seamless from "../public/seamlessCommunication.png";
import nohogwash from "../public/nohogwash.png";
import strategy from "../public/strategy.png";
import astronaut from "../public/astronaut.png";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const dental = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const flipboxItems = [
    {
      title: "Web design",
      icon: astronaut,
      desc: "A team with a combined 100+ years of experience building dental websites. We design clean websites that are engineered to book more appointments.",
    },
    {
      title: "SEO",
      icon: astronaut,
      desc: "Our proprietary SEO tactics give us an advantage over everyone in your market. We deliver top positions to our clients for their websites on major search engines like Google, Bing and Duckduckgo.",
    },
    {
      title: "Google Ads",
      icon: astronaut,
      desc: "We are PPC veterans who have spent more than $2M on dental marketing campaigns and use cutting-edge tactics to explode your conversion rates. Facebook Ads: We use hyper-targeting strategies on Facebook & Instagram to drive patients to your practice.",
    },
  ];
  return (
    <React.Fragment>
      <section className={classes.whiteLabelBanner}>
        <div className={`container-lg ${classes.heroContainer}`}>
          <div className={classes.heroText}>
            <h1 className="title" style={{ textAlign: "left", fontSize: "35px" }}>
              <span className="titleBackground">#1 Dental Marketing Company</span> <br />
              SEO, PPC, Web Design
            </h1>
            <br />
            <p>
              Guaranteed new patients every month or we work for free. Award winning digital marketing agency.
              <br />
              Our clients book 25 new patients/mo. On avg,
              <br />
              Special Offer - Starting at $800/mo
            </p>
            <br />
            <Button href={"/"}>EXPLORE PLANS & PRICING</Button>
            <br />
            <div className={classes.heroForm}>
              <div className={classes.form}>
                <h3 className="title">Talk to a dental marketing expert</h3>
                <p>for a free online marketing audit</p>
                <form onSubmit={submitHandler}>
                  <input type="text" name="fullName" id="" placeholder="Full Name" required />
                  <input type="text" name="practiceName" id="" placeholder="Practice Name" required />
                  <input type="email" name="email" id="" placeholder="Email" required />
                  <input type="tel" name="phone" id="" placeholder="Phone Number" required />

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className={classes.heroImage}>
            <Image src={astronaut} alt="" />
          </div>
        </div>
      </section>
      <NumberStrip />
      <Section
        title={
          <>
            Experience Skyward Digital’s <span className="titleBackground">Guarantee</span>
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <p style={{ width: "50%", margin: "50px auto", textAlign: "center", fontSize: "24px" }}>
          We guarantee you 100% satisfaction. If our dental marketing services don’t deliver the promised results within the first 30 days, we won’t charge you a cent. Guaranteed!
        </p>
        <Button href="/" position={"center"}>
          Let's Book new patients
        </Button>
      </Section>
      <Section
        padding={"70px 0"}
        title={
          <>
            Here’s What We’ll Do <span className="titleBackground">Exactly</span>
          </>
        }
      >
        <div className={classes.abcContainer}>
          <div className={classes.abc}>
            <h2>Step 1</h2>
            <h3>Build you a stunning website (If your current website is great, we’ll optimize it for conversions)</h3>
          </div>
          <div className={classes.abc}>
            <h2>Step 2</h2>
            <h3>We target patients who are looking for a dentist in your area through SEO & ads</h3>
          </div>
          <div className={classes.abc}>
            <h2>Step 3</h2>
            <h3>We track every call and appointment to give you a qualified list of new patients</h3>
          </div>
          <div className={classes.abc}>
            <h2>Step 4</h2>
            <h3>If we don’t deliver on our promise, you get a full refund</h3>
          </div>
        </div>
        <Button href="/" position={"center"}>
          See Results
        </Button>
      </Section>

      <Section
        padding={"70px 0"}
        background={"#fff"}
        title={
          <>
            Practices That Choose <span className="titleBackground">Skyward</span> get results
          </>
        }
      >
        <Swiper
          className={classes.testimonials}
          style={{ padding: "35px 50px" }}
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
            <div className={classes.testimonial}>
              <div className={classes.image}>
                <Image src={astronaut} alt="" />
              </div>
              <div className={classes.content}>
                <h3>John Doe</h3>
                <h4>Designation</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Button href="/">Read More</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.testimonial}>
              <div className={classes.image}>
                <Image src={astronaut} alt="" />
              </div>
              <div className={classes.content}>
                <h3>John Doe</h3>
                <h4>Designation</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Button href="/">Read More</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.testimonial}>
              <div className={classes.image}>
                <Image src={astronaut} alt="" />
              </div>
              <div className={classes.content}>
                <h3>John Doe</h3>
                <h4>Designation</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Button href="/">Read More</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.testimonial}>
              <div className={classes.image}>
                <Image src={astronaut} alt="" />
              </div>
              <div className={classes.content}>
                <h3>John Doe</h3>
                <h4>Designation</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Button href="/">Read More</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.testimonial}>
              <div className={classes.image}>
                <Image src={astronaut} alt="" />
              </div>
              <div className={classes.content}>
                <h3>John Doe</h3>
                <h4>Designation</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Button href="/">Read More</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.testimonial}>
              <div className={classes.image}>
                <Image src={astronaut} alt="" />
              </div>
              <div className={classes.content}>
                <h3>John Doe</h3>
                <h4>Designation</h4>
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
      <Section
        title={
          <>
            Working With Us Is A <span className="titleBackground">No Brainer</span>
          </>
        }
        padding={"70px 0"}
      >
        <div className={classes.noBrainer}>
          <div className={classes.item}>
            <Image src={astronaut} alt="" />
            <h3>No Contracts</h3>
          </div>
          <div className={classes.item}>
            <Image src={astronaut} alt="" />
            <h3>We don’t work with your direct competitors</h3>
          </div>
          <div className={classes.item}>
            <Image src={astronaut} alt="" />
            <h3>Guaranteed new patient bookings</h3>
          </div>
          <div className={classes.item}>
            <Image src={astronaut} alt="" />
            <h3>Reduce your marketing spend by at least 20%</h3>
          </div>
        </div>
        <Button href="/" position={"center"}>
          Schedule a Free Demo
        </Button>
      </Section>

      <Boxes title={<span className="titleBackground">Services</span>} items={flipboxItems} padding={"70px 0"} background={"#fff"} />
    </React.Fragment>
  );
};

export default dental;
