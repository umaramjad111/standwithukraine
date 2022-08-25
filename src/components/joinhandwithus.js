import React from "react";
import { FoodPoint, Shelter, Immigration, FirstAid } from "../shared/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Joinhandwithus() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);
  return (
    <>
      <div className="row join-content" data-aos="fade-up">
        <div className="col-lg-3 col-sm-12">
          <h1>
            Join <br /> Hands <br /> with us
          </h1>
          <p className="text-start">What We Serve</p>
        </div>
        <div className="col-lg-2 col-sm-12">
          <img src={FoodPoint} alt="" />
          <h3>Food Points</h3>
          <p>
            A number of volunteering individuals and organizations are there for
            you, providing free food on daily basis.
          </p>
        </div>
        <div className="col-lg-2 col-sm-12">
          <img src={Shelter} alt="" />
          <h3>Shelter Areas</h3>
          <p>
            World societies and clubs have join hands in providing shelters and
            safe areas to immigrants.
          </p>
        </div>
        <div className="col-lg-2 col-sm-12">
          <img src={Immigration} alt="" />
          <h3>Immigration</h3>
          <p>
            All the suitable and safe areas are marked and placed here for you.
          </p>
        </div>
        <div className="col-lg-2 col-sm-12">
          <img src={FirstAid} alt="" />
          <h3>First Aid</h3>
          <p>
            With the assistance by UNICEF,the first aid kits are provided at the
            health centers.
          </p>
        </div>
      </div>
    </>
  );
}
