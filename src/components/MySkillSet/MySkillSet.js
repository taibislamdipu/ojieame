import React from "react";

const MySkillSet = ({ isSmallScreen }) => {
  return (
    <div className="mx-10 mt-24 mb-32 md:mx-56 md:mt-14 md:flex">
      <div
        className={`${
          isSmallScreen && "mb-10 text-center"
        }  space-y-6 text-white lg:w-1/2`}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h3 className="font-bold text-blue">MY SKILLSET</h3>
        <h2 className="text-4xl font-bold">
          Graphic Design,
          <br />
          Interface Design
          {isSmallScreen && <br />} &
          <br />
          User Experience
        </h2>
        <button className="actionBtn border-b border-solid border-blue pt-6 pb-2">
          MY PROCESS
        </button>
      </div>
      <div className="lg:w-1/2" data-aos="fade-up" data-aos-duration="2000">
        <p className="text-justify text-lightGray md:w-3/4">
          I specialize in building complex web applications, leading front-end
          teams, digital product design and developing visual design systems. I
          enjoy creating effortless user experience and designing delightful
          digital products. The entire process of going from a concept to
          release and gathering user’s feedback on either client’s or my own
          products is what makes me wake up everyday!
          <br />I worked with numerous clients from all around the world from
          early startups to well-established companies. I always seek new
          opportunities for cooperation on projects around interesting
          dashboards, design systems or landing pages. Let’s create something
          awesome together!
        </p>
      </div>
    </div>
  );
};

export default MySkillSet;
