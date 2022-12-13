import React from "react";

import Slider from "react-slick";
import CastCard from "../../components/CastCard";
import SmallCard from "../../components/SmallCard";

export default function Demo() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1.25,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1.25,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="nav-padding"></div>
      <div className="smallslider-content ">
        <Slider {...settings}>
          <CastCard
            name="Rick Sanchez"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <CastCard
            name="Rick Sanchez"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <CastCard
            name="Rick Sanchez"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <CastCard
            name="Rick Sanchez"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <CastCard
            name="Rick Sanchez"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <CastCard
            name="Rick Sanchez"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <CastCard
            name="Rick Sanchez"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <CastCard
            name="Rick Sanchez"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <CastCard
            name="Rick Sanchez"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
        </Slider>
      </div>
    </div>
  );
}
