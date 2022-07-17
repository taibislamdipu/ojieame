import React from "react";

const Footer = ({ isSmallScreen }) => {
  return (
    <div
      className={`${
        isSmallScreen && "mb-14 text-center"
      } mx-10 mb-5 items-center justify-between md:mx-56 md:flex`}
    >
      <div>
        <p className="font-bold text-dateGray">BUILT FROM SCRATCH BY ME .)</p>
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
