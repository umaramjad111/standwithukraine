import React from "react";
import { useEffect } from "react";
import { Aboutusimg, Facebook, Linkedin, Twitter } from "../shared/image";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Aboutus() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);
  return (
    <div className="row about-us-content">
      <div className="col-lg-6 col-sm-12" data-aos="fade-up">
        <img src={Aboutusimg} alt="" />
      </div>
      <div className="col-lg-6 col-sm-12 mt-3">
        <h1 data-aos="fade-up">About Us</h1>
        <h3 data-aos="fade-up">Who we are</h3>
        <p data-aos="fade-up">
          We are a crowdsourced information platform with a comprehensive list
          of resources to help Ukraine and Ukrainians. Our goal is to spread
          awareness about resources for Ukrainians in need of assistance, as
          well as people looking to help. Ukrainians are fighting for peace not
          only in Ukraine, but in all of Europe.
        </p>
        <div className="social-media" data-aos="fade-up">
          <div>
            <img src={Facebook} alt="" />
          </div>
          <div>
            <img src={Twitter} alt="" />
          </div>
          <div>
            <img src={Linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
