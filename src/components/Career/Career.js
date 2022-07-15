import React, { useEffect, useState } from "react";

const Career = ({ isSmallScreen }) => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    fetch("./CareerData.JSON")
      .then((res) => res.json())
      .then((data) => setCareerData(data));
  }, []);

  return (
    <div className="md:mx-56 mx-10 text-white testb">
      <div
        className={`${
          isSmallScreen && "text-center"
        } md:flex justify-between items-center`}
      >
        <div>
          <h2 className="text-6xl font-bold ">
            Career <span className="text-blue text-3xl md:text-4xl">+</span>
          </h2>
        </div>
        <div>
          <h2>Get CV</h2>
        </div>
      </div>
      <div className="md:flex">
        {careerData.map((career) => (
          <div className="md:w-1/4" key={career.id}>
            <div className="flex items-center">
              <span className="text-blue">|</span>
              <h5 className="text-2xl font-bold pl-4">{career?.title}</h5>
            </div>
            <div className="ml-12 md:ml-5">
              <p className="">{career?.designation}</p>
              <p className="text-dateGray mt-2">{career?.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
