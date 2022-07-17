import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselImg from "../../assets/images/carouselImg.jpg";
import { AiFillDribbbleCircle } from "react-icons/ai";

const RecentProject = ({ isSmallScreen }) => {
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
    <div className="mb-36 text-white">
      <div
        style={{ height: "100%" }}
        className={`${
          isSmallScreen && "mb-10 text-center"
        } z-10 flex flex-col justify-between text-2xl md:absolute md:mx-56`}
      >
        <div>
          <h2 className="text-6xl font-bold ">
            Recent
            <br />
            Projects <span className="text-4xl text-blue">+</span>
          </h2>
        </div>

        {!isSmallScreen && (
          <div>
            <button className="actionBtn flex items-center gap-8 border-b border-solid border-blue pb-2 text-base">
              My Dribbble
              <AiFillDribbbleCircle size={26} />
            </button>
          </div>
        )}
      </div>
      <Carousel responsive={responsive}>
        <div className="mx-10 items-center md:mx-56 md:flex">
          <div className="card cursor-pointer rounded-xl md:pr-4">
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
            <div className="card cursor-pointer rounded-xl py-4">
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

            <div className="card cursor-pointer rounded-xl">
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
        <div className="mx-10 items-center md:mx-56 md:flex">
          <div className="card cursor-pointer rounded-xl md:pr-4">
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
            <div className="card cursor-pointer rounded-xl py-4">
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

            <div className="card cursor-pointer rounded-xl">
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

      {isSmallScreen && (
        <div className="flex justify-center py-4">
          <button className="actionBtn flex items-center gap-8 border-b border-solid border-blue pb-2 text-base">
            My Dribbble
            <AiFillDribbbleCircle size={26} />
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentProject;
