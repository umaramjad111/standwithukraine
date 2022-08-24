import React from "react";
import { Email, Message } from "../shared/image";
export default function Emailsubscribe() {
  return (
    <>
      {/*<div className="email-subsribe-content">
        <h1>
          Subscribe to get information, latest news about the current happenings
          in Ukraine
        </h1>
        <div>
          <div className="email-div">
            <div className="email-input">
              <img src={Email} alt="" />
              <input type="email" placeholder="Your Email" className="w-100" />
            </div>
            <div className="mt-3">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
  </div>*/}

      <div className="email-subsribe-content">
        <div className="msg-img">
          <img src={Message} alt="" />
        </div>
        <div>
          <h1>
            Subscribe to get information, latest news about the current
            happenings in Ukraine
          </h1>
          <div>
            <div className="email-div">
              <div className="email-input">
                <img src={Email} alt="" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-100"
                />
              </div>
              <div className="mt-3">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
