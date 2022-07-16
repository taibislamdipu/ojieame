import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselImg from "../../assets/images/carouselImg.jpg";

const RecentProject = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="text-white">
      <Carousel responsive={responsive}>
        <div className="testb mx-10 items-center md:mx-56 md:flex">
          <div className="card cursor-pointer rounded-xl from-black bg-size-200 bg-pos-0 transition-all duration-500 hover:bg-gradient-to-t hover:bg-pos-100 md:pr-4 ">
            <div className="cardTitle absolute ml-4">
              <h1 className="mt-80 text-2xl font-bold">
                <span className="text-blue">| </span>
                Soovu
              </h1>
            </div>
            <img
              src={carouselImg}
              alt=""
              className="relative -z-10 block rounded-xl"
            />
          </div>
          <div>
            <div className="card cursor-pointer rounded-xl from-black bg-size-200 bg-pos-0 py-4 transition-all duration-500 hover:bg-gradient-to-t hover:bg-pos-100">
              <div className="cardTitle absolute ml-4">
                <h1 className="mt-80 text-2xl font-bold">
                  <span className="text-blue">| </span>2
                </h1>
              </div>
              <img
                src={carouselImg}
                alt=""
                className="relative -z-10 block rounded-xl"
              />
            </div>

            <div className="card cursor-pointer rounded-xl from-black bg-size-200 bg-pos-0 transition-all duration-500 hover:bg-gradient-to-t hover:bg-pos-100">
              <div className="cardTitle absolute ml-4">
                <h1 className="mt-80 text-2xl font-bold">
                  <span className="text-blue">| </span>3
                </h1>
              </div>
              <img
                src={carouselImg}
                alt=""
                className="relative -z-10 block rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="testb mx-10 items-center md:mx-56 md:flex">
          <div className="card cursor-pointer rounded-xl from-black bg-size-200 bg-pos-0 transition-all duration-500 hover:bg-gradient-to-t hover:bg-pos-100 md:pr-4 ">
            <div className="cardTitle absolute ml-4">
              <h1 className="mt-80 text-2xl font-bold">
                <span className="text-blue">| </span>
                Soovu
              </h1>
            </div>
            <img
              src={carouselImg}
              alt=""
              className="relative -z-10 block rounded-xl"
            />
          </div>
          <div>
            <div className="card cursor-pointer rounded-xl from-black bg-size-200 bg-pos-0 py-4 transition-all duration-500 hover:bg-gradient-to-t hover:bg-pos-100">
              <div className="cardTitle absolute ml-4">
                <h1 className="mt-80 text-2xl font-bold">
                  <span className="text-blue">| </span>2
                </h1>
              </div>
              <img
                src={carouselImg}
                alt=""
                className="relative -z-10 block rounded-xl"
              />
            </div>

            <div className="card cursor-pointer rounded-xl from-black bg-size-200 bg-pos-0 transition-all duration-500 hover:bg-gradient-to-t hover:bg-pos-100">
              <div className="cardTitle absolute ml-4">
                <h1 className="mt-80 text-2xl font-bold">
                  <span className="text-blue">| </span>3
                </h1>
              </div>
              <img
                src={carouselImg}
                alt=""
                className="relative -z-10 block rounded-xl"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default RecentProject;
