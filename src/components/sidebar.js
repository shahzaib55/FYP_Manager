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
  { name: "Dashboard", path: "/dashboard/", icon: <AiOutlineHome />, current: true },
  {
    name: "Projects",
    path: "projects",
    icon: <AiOutlineFundProjectionScreen className="w-4 h-4" />,
  },
  {
    name: "Supervisors",
    path: "supervisor",
    icon: <MdOutlineSupervisorAccount />,
  },
  {
    name: "Groups",
    path: "groups",
    icon: <HiOutlineUserGroup />,
  },
  { name: "Students", path: "students", icon: <BsPerson /> },
  { name: "Assignments", path: "Tasks", icon: <BiTask /> },
  {
    name: "Announcement",
    path: "announcement",
    icon: <TfiAnnouncement />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Sidebar() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex">
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
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
              onClick={Route.current}
              className={({ isActive }) =>
                isActive
                  ? "sidebar_link_active group flex items-center space-x-3.5 text-sm p-2 mr-5 hover:border-l hover:border-l-4 hover:border-l-sea-800 rounded-r-full sidebar_link font-sans font-medium"
                  : "group flex items-center space-x-3.5 text-sm p-2 mr-5 hover:border-l hover:border-l-4 hover:border-l-sea-800 rounded-r-full sidebar_link font-sans font-medium"
              }
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
    </>
  );
}

export default Sidebar;
