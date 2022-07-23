import React from "react";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";

const CaseStudies = ({ isSmallScreen }) => {
  return (
    <div
      className={`${isSmallScreen && "mt-96"} mx-10 mb-16 text-white md:mx-56`}
    >
      <div>
        <h2
          className={`${
            isSmallScreen && "mb-28 pt-28 text-center"
          } mb-28  text-4xl font-bold md:text-6xl`}
        >
          Case Studies <span className="text-3xl text-blue md:text-4xl">+</span>
        </h2>
      </div>
      <div className="gap-6 space-y-4 md:flex md:space-y-0">
        <div className="card h-full cursor-pointer rounded-xl md:w-2/4 ">
          <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
            <h1 className="z-50 mt-64 text-2xl font-bold">
              <span className="text-blue">| </span>
              Soovu
            </h1>
          </div>
          <img
            src={image1}
            alt=""
            className="relative -z-10 block rounded-xl "
            style={{ height: 330, width: "100%" }}
          />
        </div>

        <div className="card h-full cursor-pointer rounded-xl md:w-2/4">
          <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
            <h1 className="mt-64 text-2xl font-bold">
              <span className="text-blue">| </span>
              FirstbankQuest
            </h1>
          </div>
          <img
            src={image2}
            alt=""
            className="relative -z-10 block rounded-xl"
            style={{ height: 330, width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
