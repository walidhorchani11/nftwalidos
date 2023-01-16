import React from "react";

import Carousel from "../components/carousel/Carousel";
import CarouselItem from "../components/carousel/CarouselItem";

import { useWeb3Provider } from "../context/Web3ProviderContext";

const Home = () => {
  const {
    web3Api: { account },
  } = useWeb3Provider();
  // TODO a modifier
  return (
    <>
      <div>
        <h1>{account}</h1>
      </div>
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
    </>
  );
};

export default Home;
