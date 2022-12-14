import css from "styled-jsx/css";

export default css.global`
  /*#
blue - #002EFF
aqua blue - #E6ECFF
yellow - #FECE1A
possible body background - #F5FAFF/#ebf5ff
*/

  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap");

  @font-face {
    font-family: "veronabold";
    src: url("../public/verona_bold-webfont.woff2") format("woff2"), url("../public/verona_bold-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background-color: #f6f6f6 !important;
    font-family: "Poppins", sans-serif !important;
    overflow-x: hidden;
  }

  .title {
    font-family: "veronabold";
    font-size: 45px;
    text-align: center;
    margin: 0 auto;
  }

  .title::after {
    top: 5px;
    content: "";
    width: 10%;
    height: 5px;
    margin: 0 auto;
    background-color: #fece1a;
    display: block;
    position: relative;
  }

  p {
    font-size: 18px;
  }

  p.subtitle {
    text-align: center;
    margin: 40px 0 30px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none !important;
  }

  * {
    box-sizing: border-box;
  }

  .my-button {
    padding: 10px 20px;
    background-color: #002eff;
    border: 2px solid #002eff;
    color: #fff;
    border-radius: 100px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 14px;
    transition: 0.3s ease-in-out;
  }

  .my-button:hover {
    background-color: #fece1a;
    color: #1d1d1d !important;
    border: 2px solid #000;
  }

  .my-button-center {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
  }

  /*---------- Testimonial Swiper Start ----------*/

  .testimonialSwiper .swiper-button-next::after,
  .testimonialSwiper .swiper-button-prev::after {
    font-size: 30px !important;
    color: #002eff;
    font-weight: bold;
  }

  .testimonialSwiper .swiper-button-next:hover::after,
  .testimonialSwiper .swiper-button-prev:hover::after {
    color: #fece1a;
  }

  .testimonialSwiper .swiper-button-next.swiper-button-disabled,
  .testimonialSwiper .swiper-button-prev.swiper-button-disabled {
    opacity: 0.1;
  }

  .testimonialSwiper .swiper-button-next {
    right: 0;
  }

  .testimonialSwiper .swiper-button-prev {
    left: 0;
  }

  .caseStudiesSwiper {
    padding: 35px 50px !important;
  }

  .caseStudiesSwiper .swiper-button-next::after,
  .caseStudiesSwiper .swiper-button-prev::after {
    font-size: 30px !important;
    font-weight: bold !important;
    color: #002eff !important;
  }

  .caseStudiesSwiper .swiper-button-next:hover::after,
  .caseStudiesSwiper .swiper-button-prev:hover::after {
    color: #000 !important;
  }

  /*---------- Testimonial Swiper End ----------*/

  /*---------- Loader Style Start ----------*/
  .loadingContainer {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    background-color: #1d1d1d;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loadingContainer img {
    width: 30%;
  }

  /*---------- Loader Style End ----------*/

  @media (max-width: 1200px) {
    .title {
      font-size: 35px;
    }
  }
`;