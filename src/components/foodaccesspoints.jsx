import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slickafter, Slickbefore } from "../shared/image";
import { Location } from "../shared/image";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Foodpointone,
  Foodpointtwo,
  Foodpointthree,
  Foodpointfour,
} from "../shared/image";
export default function Foodaccesspoints() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="arrow" onClick={onClick}>
        <div className="angle-right">
          <img src={Slickafter} alt="" />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="rarrow" onClick={onClick}>
        <div className="angle-left">
          <img src={Slickbefore} alt="" />
        </div>
      </div>
    );
  }
  var settings = {
    dots: false,
    arrows: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerPadding: "60px",
    // autoplay: true,
    // slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const foodaccessarr = [
    {
      image:
        "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
      title: "UNICEF Fund for supporting Ukrainian children",
      location: "Chisinau, Moldova",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
      title: "UNICEF Fund for supporting Ukrainian children",
      location: "Chisinau, Moldova",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
      title: "UNICEF Fund for supporting Ukrainian children",
      location: "Chisinau, Moldova",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
      title: "UNICEF Fund for supporting Ukrainian children",
      location: "Chisinau, Moldova",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
      title: "UNICEF Fund for supporting Ukrainian children",
      location: "Chisinau, Moldova",
    },
  ];

  return (
    <div className="container p-5">
      <Slider {...settings}>
        {foodaccessarr.map((item) => (
          <div className="p-2">
            <div className="food-slider" data-aos="zoom-in">
              <div className="img-box">
                <img src={item.image} alt="" />
              </div>
              <div className="des">
                <h3>{item.title}</h3>
                <div className="location">
                  <img src={Location} alt="" />
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="food-points-btn">
        <Button className="btn-food">Access Food Points</Button>
      </div>
    </div>
  );
}
