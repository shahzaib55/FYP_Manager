import React from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.target.id === "btn") {
      navigate("../students");
    }
  };
  return (
    <>
      <div className="flex flex-col pt-2 mr-20">
        <div className="flex flex-row h-10 ml-5">
          <div className="flex w-[50%] items-center justify-start">
            <h1 className="text-xl font-semibold text-gray-600">Add Student</h1>
          </div>
          <div className="flex w-[50%]  items-center justify-end mr-6">
            <button
              id="btn"
              onClick={handleClick}
              className="bg-indigo-500 btn items-center rounded-md border border-transparent  px-5  text-base font-medium text-sm text-white shadow-md  focus:outline-none ring-0 "
            >
              Back
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
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                  </div>
                  <div className="flex mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Spartans"
                    />
                  </div>
                </div>
                <div className=" flex flex-col w-56 justify-start">
                  <div className="flex justify-start">
                    <label
                      htmlFor="rollNo"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Roll No
                    </label>
                  </div>
                  <div className="flex mt-1">
                    <input
                      type="text"
                      name="rollNo"
                      id="rollNo"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="BCSM-F18-310"
                    />
                  </div>
                </div>
                <div className=" flex flex-col w-56 justify-start">
                  <div className="flex justify-start">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                  </div>
                  <div className="flex mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="bcsm-f18-310@superior.edu.pk"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-20 mx-8 my-8">
                <div className=" flex flex-col w-56 justify-start">
                  <div className="flex justify-start">
                    <label
                      htmlFor="section"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Section
                    </label>
                  </div>
                  <div className="flex mt-1">
                    <select
                      id="section"
                      class=" border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a section</option>
                      <option className="hover:bg-blue-500" value="US">7A</option>
                      <option value="CA">7B</option>
                      <option value="FR">7C</option>
                      <option value="DE">7D</option>
                      <option value="DE">7E</option>
                      <option value="US">8A</option>
                      <option value="CA">8B</option>
                      <option value="FR">8C</option>
                      <option value="DE">8D</option>
                      <option value="DE">8E</option>
                    </select>
                  </div>
                </div>
                <div className=" flex flex-col w-56 justify-start">
                  <div className="flex justify-start">
                    <label
                      htmlFor="Group"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Group
                    </label>
                  </div>
                  <div className="flex mt-1">
                    <input
                      type="text"
                      name="group"
                      id="group"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Spartans"
                    />
                  </div>
                </div>
                <div className=" flex flex-col w-56 justify-start">
                  <div className="flex justify-start">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Comapny
                    </label>
                  </div>
                  <div className="flex mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Aurlab"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-20 mx-8 my-8">
                <div className=" flex flex-col w-56 justify-start">
                  <div className="flex justify-start">
                    <label
                      htmlFor="supervisor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Supervisor
                    </label>
                  </div>
                  <div className="flex mt-1">
                    <input
                      type="text"
                      name="supervisor"
                      id="supervisor"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="sir jawad"
                    />
                  </div>
                </div>
                <div className=" flex flex-col w-56 justify-start">
                  <div className="flex justify-start">
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact
                    </label>
                  </div>
                  <div className="flex mt-1">
                    <input
                      type="text"
                      name="contact"
                      id="contact"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0300000000"
                    />
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

export default AddStudent;
