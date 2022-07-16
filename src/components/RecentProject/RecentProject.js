import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselImg from "../../assets/images/carouselImg.jpg";

const RecentProject = () => {
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
    <div className="text-white">
      <Carousel responsive={responsive}>
        <div className="testb mx-10 items-center md:mx-56 md:flex">
          <div>
            <img src={carouselImg} alt="" className="rounded-xl" />
          </div>
          <div>
            <div className="py-4 md:p-4">
              <img src={carouselImg} alt="" className="rounded-xl" />
            </div>
            <div className="md:px-4">
              <img src={carouselImg} alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
        <div className="testb mx-10 items-center md:mx-56 md:flex">
          <div>
            <img src={carouselImg} alt="" className="rounded-xl" />
          </div>
          <div>
            <div className="py-4 md:p-4">
              <img src={carouselImg} alt="" className="rounded-xl" />
            </div>
            <div className="md:px-4">
              <img src={carouselImg} alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default RecentProject;
