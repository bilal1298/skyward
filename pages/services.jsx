import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
const services = () => {
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Services"}
        desc={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis maxime optio quibusdam blanditiis illo aperiam nostrum, reprehenderit modi doloribus animi ratione cum. Porro,
            error ea! Commodi vero aliquam quod!
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
    </React.Fragment>
  );
};

export default services;
