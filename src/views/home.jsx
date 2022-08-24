import React from "react";
import Aboutus from "../components/aboutus";
import Foodaccesspoints from "../components/foodaccesspoints";
import Joinhandwithus from "../components/joinhandwithus";
import MapContainer from "../components/sheltermap";
import Soliderityukranian from "../components/soliderityukranian";
import Helpukranian from "../components/helpukranian";
import { Ukraniansimg } from "../shared/image";
import Emailsubscribe from "../components/emailsubscribe";
import Header from "../components/header";
import Footer from "../components/footer";
// import { useRef } from "react";
export default function Home() {
  // const aboutref = useRef(null);
  // const foodref = useRef(null);
  // const shelterref = useRef(null);
  // const scrolltosection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <>
      <Header
      // scrolltosection={scrolltosection}
      // aboutref={aboutref}
      // foodref={foodref}
      // shelterref={shelterref}
      />
      <div className="ukrainians">
        <p>
          Everything you need to help <br /> <strong>Ukrainians</strong> in
          their fight for <strong>peace</strong>
          and <br /> <strong>freedom</strong> – in one place.
        </p>
        <div className="ukranians-img">
          <img src={Ukraniansimg} alt="" />
        </div>
      </div>
      <div className="join-hands container">
        <Joinhandwithus />
      </div>
      <div id="Aboutus" className="about-us">
        <Aboutus />
      </div>

      <div id="Food" className="food-access-points p-5">
        <h1 className="text-center">Food Access points</h1>
        <p className="text-center">Where to get food</p>
        <Foodaccesspoints />
      </div>
      <div id="Shelter" className="shelter-access-points">
        <h1 className="text-center">Shelter Access points</h1>
        <p className="text-center">Where to request shelter</p>
        <MapContainer />
      </div>
      <div className="soliderity-ukranian">
        <Soliderityukranian />
      </div>
      <div className="help-ukranian p-5">
        <Helpukranian />
      </div>
      <div className="email-subscribe p-5">
        <Emailsubscribe />
      </div>
      <Footer />
    </>
  );
}
