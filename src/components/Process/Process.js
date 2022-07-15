import React from "react";

const Process = ({ isSmallScreen }) => {
  return (
    <div
      className={`${
        isSmallScreen && "text-center"
      } md:mx-56 mx-10 text-white testb`}
    >
      <h2 className="text-6xl font-bold ">
        Process <span className="text-blue text-4xl">+</span>
      </h2>

      <section className="md:flex">
        <div className="w-2/6 h-56">
          <div className="absolute ml-12 mt-10">
            <h3 className="text-2xl font-bold mb-6">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="">
            <p className="text-8xl text-darkGray font-bold">01</p>
          </div>
        </div>
        <div className="w-2/6 h-56">
          <div className="absolute ml-12 mt-10">
            <h3 className="text-2xl font-bold mb-6">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="">
            <p className="text-8xl text-darkGray font-bold">01</p>
          </div>
        </div>
        <div className="w-2/6 h-56">
          <div className="absolute ml-12 mt-10">
            <h3 className="text-2xl font-bold mb-6">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="">
            <p className="text-8xl text-darkGray font-bold">01</p>
          </div>
        </div>
      </section>
      <section className="md:flex">
        <div className="w-2/6 h-56">
          <div className="absolute ml-12 mt-10 ">
            <h3 className="text-2xl font-bold mb-6">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="">
            <p className="text-8xl text-darkGray font-bold">01</p>
          </div>
        </div>
        <div className="w-2/6 h-56">
          <div className="absolute ml-12 mt-10">
            <h3 className="text-2xl font-bold mb-6">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="">
            <p className="text-8xl text-darkGray font-bold">01</p>
          </div>
        </div>
        <div className="w-2/6 h-56">
          <div className="absolute ml-12 mt-10">
            <h3 className="text-2xl font-bold mb-6">Pre-Process</h3>
            <ul className="space-y-3">
              <li>Collect Informations</li>
              <li>Personas</li>
              <li>SetUp Goals</li>
              <li>Project Folder + Moodboard</li>
            </ul>
          </div>
          <div className="">
            <p className="text-8xl text-darkGray font-bold">01</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
