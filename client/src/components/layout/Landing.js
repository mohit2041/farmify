import React from "react";
import classes from "./landing.module.css";

const Landing = () => {
  return (
    <section className={`${classes.landing}` + ` my-5 py-5`}>
      <div className={classes.landinginner}></div>
      <div className="dark-overlay"></div>
    </section>
  );
};

export default Landing;
