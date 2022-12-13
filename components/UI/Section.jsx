import React from "react";

const Section = ({ padding, background, title, children, color }) => {
  return (
    <section style={{ padding, background }}>
      <div className="container-lg">
        <h2 className="title" style={{color}}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
