import React from "react";

const Footer = ({ isSmallScreen }) => {
  return (
    <div
      className={`${
        isSmallScreen && "text-center"
      } mx-10 mb-5 items-center justify-between space-y-10 py-10 md:mx-56 md:flex lg:space-y-0 lg:py-20`}
    >
      <div>
        <p className="font-bold text-dateGray">
          Designed & Developed{" "}
          <a
            className="text-[#2196f3] underline hover:text-[#2181F3]"
            href="https://www.linkedin.com/in/taibislamdipu"
          >
            Taib Islam
          </a>
          , All Rights Reserved.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b336f7821d4b34b1d40e11d_Asset%202.svg"
          alt=""
          width="150"
          height="150"
        />
      </div>
    </div>
  );
};

export default Footer;
