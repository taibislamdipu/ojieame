import React, { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const Career = ({ isSmallScreen }) => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    fetch("./CareerData.JSON")
      .then((res) => res.json())
      .then((data) => setCareerData(data));
  }, []);

  return (
    <div className="testb mx-10 text-white md:mx-56">
      <div
        className={`${
          isSmallScreen && "text-center"
        } items-center justify-between md:flex`}
      >
        <div>
          <h2 className="text-6xl font-bold ">
            Career <span className="text-3xl text-blue md:text-4xl">+</span>
          </h2>
        </div>
        <div>
          <button className="actionBtn flex items-center gap-32 border-b border-solid border-blue pb-2">
            Get CV
            <FaFileAlt size={16} />
          </button>
        </div>
      </div>
      <div className="md:flex">
        {careerData.map((career) => (
          <div className="md:w-1/4" key={career.id}>
            <div className="flex items-center">
              <span className="text-blue">|</span>
              <h5 className="pl-4 text-2xl font-bold">{career?.title}</h5>
            </div>
            <div className="ml-12 md:ml-5">
              <p className="">{career?.designation}</p>
              <p className="mt-2 text-dateGray">{career?.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
