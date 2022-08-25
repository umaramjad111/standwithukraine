import React from "react";
import { Soliderity } from "../shared/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Soliderityukranian() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);
  return (
    <div className="container-fluid g-0">
      <div className="row soliderity-content g-0">
        <div className="col-lg-7 col-sm-12 sub-content" data-aos="fade-up">
          <h1>Showing Soliderity with Ukrainian</h1>
          <p>
            Every day, more and more families and children need medical
            assistance due to Russian aggression. Soldiers need emergency
            medical aid. Ukrainian medics sorely need assistance both on the
            front lines and in the rear. We have provided shelter, food, and
            medical aid to thousands of Ukrainian families in need.
          </p>
          <div className="count">
            <div>
              <h5>$ 50 M+</h5>
              <p>Food Donations</p>
            </div>
            <div>
              <h5>5500+</h5>
              <p>Medical Kits</p>
            </div>
            <div>
              <h5>780+</h5>
              <p>Food Shelters</p>
            </div>
          </div>
          <div className="contact-us">
            <button>Contact us</button>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12">
          <div className="img-div">
            <img src={Soliderity} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
