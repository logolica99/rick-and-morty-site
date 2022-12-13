import React from "react";

import Slider from "react-slick";
import CastCard from "./CastCard";

export default function LargeCardSlider({ sliderData }) {
  const settings = {
    infinite: false,
    dots: false,
    speed: 500,
    initialSlide: -0.0001,
    slidesToShow: 5.5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 2.25,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1.25,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1.4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="">
        <Slider {...settings}>
          {sliderData &&
            sliderData.map((elem) => (
              <CastCard name={elem.name} key={elem.id} image={elem.image} />
            ))}
        </Slider>
      </div>
    </div>
  );
}
