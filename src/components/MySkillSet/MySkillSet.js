import React from "react";

const MySkillSet = ({ isSmallScreen }) => {
  return (
    <div className="md:flex md:mx-56 mx-10">
      <div
        className={`${
          isSmallScreen && "text-center mb-10"
        } text-white  lg:w-1/2 space-y-6 `}
      >
        <h3 className="text-blue font-bold">MY SKILLSET</h3>
        <h2 className="text-4xl font-bold">
          Graphic Design,
          <br />
          Interface Design &
          <br />
          User Experience
        </h2>
        <button className=" text-start border-solid border-b pr-4 pb-2 border-blue ">
          MY PROCESS
        </button>
      </div>
      <div className="lg:w-1/2">
        <p className="text-white text-justify md:w-3/4">
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
