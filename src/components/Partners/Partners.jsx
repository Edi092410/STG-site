import React from "react";
import { Partner } from "./Partner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Partners = () => {
  const data = [
    "Боловсрол соёл шинжлэх ухааны яам",
    "Байгаль орчин аялал жуулчлалын яам",
    "Гадаад харилцааны яам",
    "Эрүүл мэндийн яам",
    "Сангийн яам",
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      // slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
    >
      {data.map((item, index) => (
        <div className=" gap-11">
          <Partner name={item} key={index} />
        </div>
      ))}
    </Carousel>
  );
};
