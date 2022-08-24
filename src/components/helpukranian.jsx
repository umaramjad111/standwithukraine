import React from "react";
import {
  Donate,
  Hireukranians,
  Hostukranians,
  Volunteer,
} from "../shared/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Helpukranian() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="container-fluid g-0 help-ukranian-content">
      <div className="row g-0">
        <div className="col-lg-6 col-sm-12 pad-ukraine" data-aos="zoom-in">
          <div>
            <h1>
              Ways you can help <br /> Ukraine
            </h1>
            <p>
              If you know of more ways or resources to help support Ukraine,
              reach out to use through our support chat and we'll get back to
              you. We are also open to any questions.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 ">
          <div className="row cards-help-ukraine">
            <div className="col-lg-5 col-sm-12 card donate-card">
              <img src={Donate} alt="" />
              <h6>Donate</h6>
              <p>
                Donating to Ukrainian Aid organizations is one of the most
                effective ways to support Ukrainians
              </p>
              <a href="">LEARN MORE</a>
            </div>
            <div className="col-lg-5 col-sm-12 card volunteer-card">
              <img src={Volunteer} alt="" />
              <h6>Volunteer</h6>
              <p>
                One of the best ways to stand with Ukraine is to volunteer with
                Ukrainian aid organizations.
              </p>
              <a href="">LEARN MORE</a>
            </div>
            <div className="col-lg-5 col-sm-12 card host-card">
              <img src={Hostukranians} alt="" />
              <h6>Host Ukrainians</h6>
              <p>Welcome Ukrainian Refugees</p>
              <a href="">LEARN MORE</a>
            </div>
            <div className="col-lg-5 col-sm-12 card hire-card">
              <img src={Hireukranians} alt="" />
              <h6>Hire Ukrainians</h6>
              <p>
                Help Ukrainian refugees provide for their families by hiring
                them in your business.
              </p>
              <a href="">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
