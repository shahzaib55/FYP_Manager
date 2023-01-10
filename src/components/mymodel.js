import React from "react";

function Mymodel({ visible, onClose }) {
  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <>
      <div
        id="container"
        onClick={handleClose}
        className="fixed inset-0 bg-black bg-opacity-20  flex justify-center items-center pb-10 w-full"
      >
        <div className="bg-white w-100 py-10 rounded-md px-20">
          <div className="flex justify-end font-xl text-lg w-full">
            <button
              id="container"
              className="bg-gray-50 hover:bg-gray-100 w-8 h-8 text-gray-600"
              onClick={handleClose}
            >
              x
            </button>
          </div>
          <div className=" flex flex-col w-60 justify-start mt-1">
            <div className="flex justify-start">
              <label
                htmlFor="fname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
            </div>
            <div className="flex mt-1">
              <input
                value="jawad"
                type="text"
                name="fname"
                id="fname"
                className="block w-full text-gray-500 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="jawad"
              />
            </div>
          </div>
          <div className=" flex flex-col w-60 justify-start mt-2">
            <div className="flex justify-start">
              <label
                htmlFor="lname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
            </div>
            <div className="flex mt-1">
              <input
                value="ahmed"
                type="text"
                name="lname"
                id="lname"
                className="block w-full text-gray-500 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="ahmed"
              />
            </div>
          </div>
          <div className=" flex flex-col w-60 justify-start mt-2">
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
                value="admin@gmail.com"
                type="email"
                name="email"
                id="email"
                className="block text-gray-500 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="admin@gmail.com"
              />
            </div>
          </div>
          <div className=" flex flex-col w-60 justify-start mt-2">
            <div className="flex justify-start">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile
              </label>
            </div>
            <div className="flex mt-1">
              <input
                value="030000000"
                type="number"
                name="mobile"
                id="mobile"
                className="block text-gray-500 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="030000000"
              />
            </div>
          </div>
          <div className=" flex flex-col w-60 justify-start mt-2">
            <div className="flex justify-start">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
            </div>
            <div className="flex mt-1">
              <input
                value="A1BS65H"
                type="text"
                name="password"
                id="password"
                className="block text-gray-500 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="A1BS65H"
              />
            </div>
          </div>
          <div>
            <button
              id="container"
              onClick={handleClose}
              className="bg-indigo-500 btn items-center rounded-md border border-transparent  px-20 py-1 text-base font-medium text-sm text-white shadow-md  focus:outline-none ring-0 mt-5"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mymodel;
