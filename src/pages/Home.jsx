import React from "react";

import Carousel from "../components/carousel/Carousel";
import CarouselItem from "../components/carousel/CarouselItem";

const Home = () => {
  // TODO a modifier
  return (
    <Carousel>
      <CarouselItem>
        <img src="robot.png" className="object-scale-down" />
      </CarouselItem>
      <CarouselItem>
        <img src="card.png" />
      </CarouselItem>
      <CarouselItem>
        <img src="robot.png" />
      </CarouselItem>
    </Carousel>
  );
};

export default Home;
