import React from "react";
import humanImg from "../../assets/images/human.jpg";

const HeroSection = ({ isSmallScreen }) => {
  return (
    <div>
      <div className="mt-32 flex items-center md:mx-56 md:mt-20">
        <div
          className={`${
            isSmallScreen && "absolute mx-10 text-center"
          }  space-y-6 text-white md:w-2/5`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl font-bold">Hello, it's me</h2>
          <h1 className="text-7xl font-bold md:text-8xl">
            Ojieame<span className="text-blue">.</span>
          </h1>
          <p className="text-justify text-base text-lightGray">
            An enthusiastic product designer currently shaping the future of
            software development by designing smooth user-interfaces that
            promote user interaction with information and data. While traveling
            around the world.
          </p>
          {!isSmallScreen && (
            <button className="actionBtn  border-b border-solid border-blue pr-4 pb-2">
              SCROLL FOR MORE
            </button>
          )}
        </div>

        {isSmallScreen ? (
          <div className="mx-auto md:w-1/2">
            {isSmallScreen ? (
              <img src={humanImg} alt="" className="" />
            ) : (
              <img src={humanImg} alt="" width="500" />
            )}
          </div>
        ) : (
          <div
            className="mx-auto md:w-1/2"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            {isSmallScreen ? (
              <img src={humanImg} alt="" className="" />
            ) : (
              <img src={humanImg} alt="" width="500" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
