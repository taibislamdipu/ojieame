import React from "react";
import humanImg from "../../assets/images/human.jpg";

const HeroSection = ({ isSmallScreen }) => {
  return (
    <div>
      <div className="md:mx-56 flex items-center mt-20">
        <div
          className={`${
            isSmallScreen && "absolute text-center mx-10"
          }  lg:w-1/2 text-white space-y-6`}
        >
          <h2 className="text-3xl font-bold">Hello, it's me</h2>
          <h1 className="md:text-8xl text-7xl font-bold">
            Ojieame<span className="text-blue">.</span>
          </h1>
          <p className="text-base text-justify">
            An enthusiastic product designer currently shaping the future of
            software development by designing smooth user-interfaces that
            promote user interaction with information and data. While traveling
            around the world. Pro
          </p>
          {!isSmallScreen && (
            <button className="border-solid border-b pr-4 pb-2 border-blue actionBtn">
              SCROLL FOR MORE
            </button>
          )}
        </div>

        <div className="lg:w-1/2">
          {isSmallScreen ? (
            <img src={humanImg} alt="" className="" />
          ) : (
            <img src={humanImg} alt="" width="500" height="300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
