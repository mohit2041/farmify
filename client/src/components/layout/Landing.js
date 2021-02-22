import React from "react";
import classes from "./landing.module.css";
const Landing = () => {
  return (
    <section className={classes.landing}>
      <div className={classes.landinginner}>
        <h1 className="x-large text-info  fs-2 fw-bold">welcome to Farmify</h1>
        <p className="text-info ">
          create your account and start selling and purchase
        </p>
      </div>
      <div className="dark-overlay"></div>
    </section>
  );
};

export default Landing;
