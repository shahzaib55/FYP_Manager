import React, { useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const data = [
  {
    icon: <BsPerson className="w-6 h-6 text-gray-500" />,
    title: "Total Student",
    total: "500",
  },
  {
    icon: <AiOutlineFundProjectionScreen className="w-6 h-6 text-gray-500" />,
    title: "Total Projects",
    total: "80",
  },
  {
    icon: <MdOutlineSupervisorAccount className="w-6 h-6 text-gray-500" />,
    title: "Total Supervisors",
    total: "15",
  },
  {
    icon: <HiOutlineUserGroup className="w-6 h-6 text-gray-500  hover:text-purple-500 " />,
    title: "Total Groups",
    total: "80",
  },
];

function Card() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleclick = async (e) => {
  
    if(value == "Total Student"){
      navigate("Students");

    }
    

  }
  return (
    <>
      <div className="flex flex-row space-x-4 mx-8 ">
        {data.map((item, i) => (
          <div
          
            // onClick={(e) => handleclick(setValue(e.target.value))}
            className="flex flex-row hover:bg-purple-50 bg-white shadow-lg pt-4 my-5 md:w-60 h-20 rounded-lg justify-start px-4 "
            key={i}
          >
            <div className="flex h-11 w-11 bg-gray-200 hover:bg-white rounded-md justify-center items-center ml-2  drop-shadow-2xl">
              {item.icon}
            </div>
            <div className="flex flex-col ml-5  items-center t-0">
              <div className="">
                <h2 className="font-sans font-bold text-md text-gray-500">
                  {item.title}
                </h2>
              </div>
              <div className="">
                <h1 className="font-sans font-bold text-lg text-gray-600">
                  {item.total}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
