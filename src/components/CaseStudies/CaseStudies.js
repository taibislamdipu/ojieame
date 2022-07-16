import React from "react";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";

const CaseStudies = ({ isSmallScreen }) => {
  return (
    <div
      className={`${isSmallScreen && "mt-96"} testb mx-10 text-white md:mx-56`}
    >
      <div>
        <h2 className="text-6xl font-bold ">
          Case Studies <span className="text-3xl text-blue md:text-4xl">+</span>
        </h2>
      </div>
      <div className="gap-6 md:flex">
        <div className="card h-full cursor-pointer rounded-xl from-black bg-size-200 bg-pos-0 transition-all duration-500 hover:bg-gradient-to-t hover:bg-pos-100 md:w-2/4">
          <div className="cardTitle absolute ml-4">
            <h1 className="mt-64 text-2xl font-bold">
              <span className="text-blue">| </span>
              Soovu
            </h1>
          </div>
          <img
            src={image1}
            alt=""
            className="relative -z-10 block rounded-xl"
            style={{ height: 330, width: "100%" }}
          />
        </div>
        <div className="card h-full cursor-pointer rounded-xl from-black bg-size-200 bg-pos-0 transition-all duration-500 hover:bg-gradient-to-t hover:bg-pos-100 md:w-2/4">
          <div className="cardTitle absolute ml-4">
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
