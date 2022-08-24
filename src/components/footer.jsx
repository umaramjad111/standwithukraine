import React from "react";
import {
  Faceboofooter,
  Linkedinfooter,
  Twitterfooter,
  Ukrainelogo,
} from "../shared/image";

export default function Footer() {
  return (
    <section className="footer">
      <div className=" container g-0 footer-content">
        <div className="row g-0 ">
          <div className="col-lg-4 col-sm-12">
            <div>
              <img src={Ukrainelogo} alt="" />
              <h6 className="mt-3">
                We are a crowdsourced information <br /> platform with a
                comprehensive list <br /> of resources to help Ukraine and
                Ukrainians.
              </h6>
              <div className="social-media mt-4">
                <div>
                  <img src={Faceboofooter} alt="" />
                </div>
                <div>
                  <img src={Twitterfooter} alt="" />
                </div>
                <div>
                  <img src={Linkedinfooter} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12">
            <h5 className="mt-3">Company</h5>

            <li>
              <a href="">About</a>
              <a href="">Terms of Use</a>
              <a href="">Privacy Policy</a>
              <a href="">How it Works</a>
            </li>
          </div>
          <div className="col-lg-2 col-sm-12">
            <h5 className="mt-3">Get Help</h5>

            <li>
              <a href="">Support Center</a>
              <a href="">24th Service</a>
              <a href="">Quick Chat</a>
            </li>
          </div>
          <div className="col-lg-2 col-sm-12">
            <h5 className="mt-3">Support</h5>
            <li>
              <a href="">FAQ</a>
              <a href="">Policy</a>
              <a href="">Business</a>
            </li>
          </div>
          <div className="col-lg-2 col-sm-12">
            <h5 className="mt-3">Contact</h5>

            <li>
              <a href="">Whatsapp</a>
              <a href="">Support 24</a>
            </li>
          </div>
        </div>
        <hr className="mt-5" />
        <h6 className="text-center">Copyright @ 2022</h6>
      </div>
    </section>
  );
}
