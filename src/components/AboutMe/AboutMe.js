import React from "react";
import "./AboutMe.css";
import videoBg from "../../assets/video/bgVideo.mp4";

const AboutMe = ({ isSmallScreen }) => {
  return (
    <div className="testb overflow-y-hidden md:h-60">
      <div className="absolute z-10 mx-10 text-white md:mx-56 md:flex ">
        <div className="space-y-4 lg:w-2/5">
          <p className="z-0 font-bold text-blue">ABOUT ME</p>
          <h3 className="text-3xl font-bold">
            Designing with
            <br />
            passion for Problem
            <br />
            Solving
          </h3>
          <p>FOLLOW ME INSTAGRAM</p>
        </div>
        <div className="lg:w-1/2">
          <p className="text-lightGray">
            I've always been passionate about pixels and design projects and
            haven't stopped working and learning about new technologies . Other
            than sitting in from of my display I enjoy myself in casual sports,
            such as bowling or playing football with friends.
            <br />
            <br />
            I'm grateful that my job allows me to work from anywhere. I'm active
            on Instagram where I share most of the and all info about my
            upcoming projects.
            <br />
            <br />I also like sharing my experiences on instagram
          </p>
        </div>
      </div>
      <div className="opacity-25">
        <video src={videoBg} autoPlay loop muted />
      </div>
    </div>
  );
};

export default AboutMe;
