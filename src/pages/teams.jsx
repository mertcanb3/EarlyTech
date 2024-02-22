import React from "react";
import Member1 from "../assets/gokhan1.png";
import Member2 from "../assets/gokhan2.png";
import Member3 from "../assets/gokhan3.png";

function Teams() {
  return (
    <div
      className="rounded-3xl md:h-[80vh] sm:px-6 md:px-0  md:pb-0 sm:pb-24 relative bottom-10 z-30 flex flex-wrap justify-between items-center "
      
    >
      <div className="flex flex-col flex-wrap lg:ml-60 justify-between h-full ">
        <div className="flex mt-16  items-center bg-blue-1000 p-7 rounded-full">
          <img src={Member1} alt="Member 1" className="h-52 rounded-full" />
          <div className="flex flex-col ml-4">
            {" "}
            <p className=" text-3xl font-extrabold text-gray-200">
              Gokhan Çelik
            </p>
            <p className="text-lg font-bold text-[#FAD64B]">Co-Founder / CEO</p>
          </div>
        </div>
        <div className="flex mb-16 mt-7 items-center bg-blue-1000 p-7 rounded-full">
          <img src={Member2} alt="Member 2" className="h-52 rounded-full" />
          <div className="flex flex-col ml-4">
            {" "}
            <p className=" text-3xl font-extrabold text-gray-200">
              Gokhan Șahin
            </p>
            <p className="text-lg font-bold text-[#FAD64B]">Co-Founder / CTO</p>
          </div>
        </div>
      </div>
      <div className="flex md:mr-44  items-center bg-blue-1000 p-7 rounded-full">
        <div className="flex flex-col items-end mr-4 ">
          {" "}
          <p className=" text-3xl font-extrabold text-gray-200 ">
            Gokhan Yildiz
          </p>
          <p className="text-lg font-bold text-[#FAD64B]">Co-Founder / CFO</p>
        </div>
        <img src={Member3} alt="Member 3" className="h-52 rounded-full" />
      </div>
    </div>
  );
}

export default Teams;
