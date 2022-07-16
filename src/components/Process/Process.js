import React, { useEffect, useState } from "react";
const axios = require("axios").default;

const Process = ({ isSmallScreen }) => {
  const [processData, setProcessData] = useState([]);

  useEffect(() => {
    fetch("./processData.json")
      .then((res) => res.json())
      .then((data) => setProcessData(data));
  }, []);

  console.log("processData--->", processData);

  return (
    <div className={`${isSmallScreen && "text-center"} text-white md:mx-56`}>
      <h2 className="mb-6 text-6xl font-bold">
        Process <span className="text-4xl text-blue">+</span>
      </h2>

      <section className="flex-wrap md:flex">
        {processData.map((process) => (
          <div className="mb-6 h-56 w-2/6 md:mb-12">
            <div className="absolute mt-10 ml-20 md:ml-12">
              <h3 className="mb-10 text-2xl font-bold">{process?.title}</h3>
              <ul className=" space-y-3">
                <li>{process?.list[0]}</li>
                <li>{process?.list[1]}</li>
                <li>{process?.list[2]}</li>
                <li>{process?.list[3]}</li>
              </ul>
            </div>
            <div className="pt-4">
              <p className=" text-8xl font-bold text-darkGray">
                0{process?.id}
              </p>
            </div>
          </div>
        ))}

        {/* <div className="h-56 w-2/6">
          <div className="absolute ml-12 mt-10">
            <h3 className="mb-6 text-2xl font-extrabold">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="pt-4">
            <p className="text-8xl font-bold text-darkGray">01</p>
          </div>
        </div>
        <div className="h-56 w-2/6">
          <div className="absolute ml-12 mt-10">
            <h3 className="mb-6 text-2xl font-bold">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="">
            <p className="text-8xl font-bold text-darkGray">01</p>
          </div>
        </div>
        <div className="h-56 w-2/6">
          <div className="absolute ml-12 mt-10">
            <h3 className="mb-6 text-2xl font-bold">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="">
            <p className="text-8xl font-bold text-darkGray">01</p>
          </div>
        </div>
        <div className="h-56 w-2/6">
          <div className="absolute ml-12 mt-10">
            <h3 className="mb-6 text-2xl font-bold">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="">
            <p className="text-8xl font-bold text-darkGray">01</p>
          </div>
        </div>
        <div className="h-56 w-2/6">
          <div className="absolute ml-12 mt-10">
            <h3 className="mb-6 text-2xl font-bold">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="">
            <p className="text-8xl font-bold text-darkGray">01</p>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Process;
