import React from "react";
import { useNavigate } from "react-router-dom";

function Task() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.target.id === "btn") {
      navigate("../Assignment");
    }
  };
  return (
    <>
      <div className="flex flex-col pt-2 mr-20">
        <div className="flex flex-row h-10 ml-5">
          <div className="flex w-[50%] items-center justify-start">
            <h1 className="text-xl font-semibold text-gray-600">Add Assignment</h1>
          </div>
          <div className="flex w-[50%]  items-center justify-end mr-6">
            <button
              id="btn"
              onClick={handleClick}
              className="bg-indigo-500 btn items-center rounded-md border border-transparent  px-5  text-base font-medium text-sm text-white shadow-md  focus:outline-none ring-0 "
            >
              show
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-y-scroll h-70 my-5 py-5 mx-10 bg-white shadow-lg rounded-lg scrollbar scrollbar scrollbar-thumb-rose-500 ">
          <form class="" action="#" method="POST">
            <div className="">
              <div className="flex flex-row space-x-20 mx-8 my-8 ">
                <div className=" flex flex-col w-56 justify-start">
                  <div className="flex justify-start">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                  </div>
                  <div className="flex mt-1">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Assignment 1"
                    />
                  </div>
                </div>
                <div className=" flex flex-col w-56 justify-start">
                  <div className="flex justify-start">
                    <label
                      htmlFor="section"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Open Date 
                    </label>
                  </div>
                  <div className="flex mt-1">
                  <input
                      type="date"
                      name="sdate"
                      id="sdate"
                      className="block w-full text-gray-500 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="fyp manager"
                    />
                  </div>
                </div>
                <div className=" flex flex-col w-56 justify-start">
                  <div className="flex justify-start">
                    <label
                      htmlFor="project"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Due Date
                    </label>
                  </div>
                  <div className="flex mt-1">
                    <input
                      type="date"
                      name="project"
                      id="project"
                      className="block w-full text-gray-500  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="fyp manager"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-20 mx-8 my-8">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                  <label
                    htmlFor="Anouncement"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Assignment
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-3">
                    <textarea
                      id="about"
                      name="about"
                      rows={5}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      defaultValue={""}
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Write a few sentences about Assignment.
                    </p>
                  </div>
                </div>
             
              </div>
             

              <div className=" flex flex-col w-60 justify-start px-8">
                <div className="flex justify-start">
                  <button
                    id="btn"
                    onClick={handleClick}
                    className="bg-indigo-500 btn items-center rounded-md border border-transparent  px-12 py-1 text-base font-medium text-sm text-white shadow-md  focus:outline-none ring-0 "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Task;
