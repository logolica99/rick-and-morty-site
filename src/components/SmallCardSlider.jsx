import React from "react";
import Slider from "react-slick";
import SmallCard from "./SmallCard";

export default function SmallCardSlider({ data }) {
  const settings = {
    dots: false,

    speed: 500,

    initialSlide: -0.5,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: -1,
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
          {data.map((elem) => (
            <SmallCard
              name={elem.name}
              key={elem.id}
              id={elem.id}
              episode={elem.episode}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
