import React from "react";
import img from "../assets/images/logo.jpg";
import { useState } from "react";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TfiAnnouncement } from "react-icons/tfi";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import "../App.css";
const navigation = [
  { name: "Dashboard", path: "/", icon: <AiOutlineHome />, current: true },
  {
    name: "Projects",
    path: "/projects",
    icon: <AiOutlineFundProjectionScreen className="w-4 h-4"/>,
    current: false,
  },
  {
    name: "Supervisors",
    path: "/supervisor",
    icon: <MdOutlineSupervisorAccount />,
    current: false,
  },
  {
    name: "Groups",
    path: "/groups",
    icon: <HiOutlineUserGroup />,
    current: false,
  },
  { name: "Students", path: "/students", icon: <BsPerson />, current: false },
  { name: "Assignments", path: "/Taks", icon: <BiTask />, current: false },
  {
    name: "Announcement",
    path: "/announcement",
    icon: <TfiAnnouncement />,
    current: false,
  },
];
// const navLinkStyle = ({ isActive }) => {
//   return{
//     background: isActive? 'bg-purple-500' : 'gray-500',
//   }
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [current, setcurrent] = useState(true);

  return (
    <div className="flex flex-col ">
      <div className="flex">
        <div>
          <img
            className="mx-3 h-10 w-auto rounded-full my-3"
            src={img}
            alt="Your Company"
          />
        </div>
        <div>
          <h1 className="text-2xl my-4 mx-2 font-sans font-bold d_heading">
            Dashboard
          </h1>
        </div>
      </div>
      <div className="flex flex-col relative mt-4 space-y-3">
        {navigation.map((Route, i) => (
          // <div>{Route.name}</div>
          <NavLink
            className={classNames(
              Route.current ? "sidebar_link_active" : "",
              "group flex items-center space-x-3.5 text-sm p-2 mr-5 hover:border-l hover:border-l-4 hover:border-l-sea-800 rounded-r-full sidebar_link font-sans font-medium"
            )}
            //  className="flex items-center space-x-3.5 text-sm p-2 mr-5 hover:bg-gray-500 hover:border-l rounded-r-full active:bg-purple-800 sidebar_link font-sans font-medium"
            to={Route.path}
            key={i}
            aria-current="page"
          >
            <div
              className="flex rounded-md ml-4 flex-shrink-0 sidebar_icon shadow-xl  w-6 h-6 items-center justify-center"
              aria-hidden="true"
            >
              {Route.icon}
            </div>
            <div>{Route.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
