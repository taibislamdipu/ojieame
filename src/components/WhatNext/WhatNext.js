import React from "react";
import typewriterImg from "../../assets/images/typewriterImg.png";
import "./WhatNext.css";
const WhatNext = ({ isSmallScreen }) => {
  return (
    <div className="text-center">
      <div className="textContainer absolute z-20 mx-10 text-center align-middle text-white">
        <div className="space-y-4">
          <p className="font-bold text-blue">WHATS NEXT</p>
          <h3 className="text-4xl font-bold">Lets work together.</h3>
          <p className=" text-lightGray ">
            If you'd like to talk about a project you want help with or need an
            advice about
            <br />
            product design, just drop me a message at
            <span className="font-bold text-white">
              {" "}
              nathan@ojieame.design
            </span>{" "}
            <br />
            I'm currently Available for any design systems projects, dashboard
            designs or
            <br />
            landing pages gigs.
          </p>
          <p>WRITE ME AN EMAIL</p>
        </div>
      </div>

      <div className="z-10 opacity-75">
        <img src={typewriterImg} alt="" className="" width="600" height="600" />
      </div>
    </div>
  );
};

export default WhatNext;
