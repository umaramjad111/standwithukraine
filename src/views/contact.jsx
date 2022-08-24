import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import {
  Contact,
  Contactlocation,
  Contactmail,
  Contactphone,
} from "../shared/image";

export default function Contactview() {
  return (
    <>
      <Header />
      <section className="contact-form">
        <div className="main-img">
          <div>
            <img src={Contact} alt="" />
          </div>
          <div className="row p-3 g-0">
            <div className="col-lg-7 col-md-12 col-sm-12 p-3">
              <div>
                <div className="contact-info">
                  <img src={Contactphone} alt="" />
                  <p className="mt-2 ms-3">+01-000-111-000</p>
                </div>
                <div className="contact-info">
                  <img src={Contactlocation} alt="" />
                  <p className="mt-2 ms-3">127-A, schet, odessa, Ukraine</p>
                </div>
                <div className="contact-info">
                  <img src={Contactmail} alt="" />
                  <p className="mt-2 ms-3">ukraine@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12  card ms-1 form">
              <h5>Contact Us</h5>
              <p>
                Fill up the form and our team will get back to you within 24
                hours
              </p>
              <div className="label-div">
                <label htmlFor="" className="w-100">
                  First Name
                  <input type="text" className="form-control" />
                </label>
                <label htmlFor="" className="w-100 ms-2">
                  Last Name
                  <input type="text" className="form-control" />
                </label>
              </div>
              <label htmlFor="" className="w-100 mt-3">
                Email
                <input type="email" className="form-control" />
              </label>
              <label htmlFor="" className="w-100 mt-3">
                Phone Number
                <input type="number" className="form-control" />
              </label>
              <label htmlFor="" className="w-100 mt-3">
                Message
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                ></textarea>
              </label>
              <div className="submit-btn">
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className="main-news-div">
            <div className="container news">
              <div className="row">
                <div className="col-lg-6 content">
                  <div>
                    <h6>Get latest news from us</h6>
                    <p>We value privacy and would never spam you!</p>
                  </div>
                </div>

                <div className="col-lg-6 email-subs">
                  <div className="email">
                    <input
                      type="email"
                      placeholder="E.g. ziggy@space.com
              "
                    />
                    <div>
                      <button className="btn btn-primary">SUBSCRIBE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
