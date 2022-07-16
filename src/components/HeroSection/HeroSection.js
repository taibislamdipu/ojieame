import React from "react";
import humanImg from "../../assets/images/human.jpg";

const HeroSection = ({ isSmallScreen }) => {
  return (
    <div>
      <div className="mt-20 flex items-center md:mx-56">
        <div
          className={`${
            isSmallScreen && "absolute mx-10 text-center"
          }  space-y-6 text-white lg:w-1/2`}
        >
          <h2 className="text-3xl font-bold">Hello, it's me</h2>
          <h1 className="text-7xl font-bold md:text-8xl">
            Ojieame<span className="text-blue">.</span>
          </h1>
          <p className="text-justify text-base">
            An enthusiastic product designer currently shaping the future of
            software development by designing smooth user-interfaces that
            promote user interaction with information and data. While traveling
            around the world. Pro
          </p>
          {!isSmallScreen && (
            <button className="actionBtn  border-b border-solid border-blue pr-4 pb-2">
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
