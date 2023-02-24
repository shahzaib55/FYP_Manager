import React from "react";

function Announcement() {
  return (
    <>
      <div className="h-70 flex flex-col sm:px-6 ">
        <div className="ml-60 sm:w-full sm:max-w-md">
          <h2 className="mt-6  text-lg font-bold text-gray-600">
            Anouncement Form
          </h2>
        </div>

        <div className="mt-8 ml-64 sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10 shadow-lg">
            <form className="flex flex-col">
              <div className="flex flex-col justify-start">
                <label
                  htmlFor="Name"
                  className=" text-sm font-medium text-gray-600 "
                >
                  Anouncement
                </label>
                <div className="mt-1">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    autoComplete=""
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="Anouncement"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Anouncement
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
                      Write a few sentences about Anouncement.
                    </p>
                  </div>
                </div>
                <button
                    id="btn"
                    // onClick={handleClick}
                    className="bg-indigo-500 btn items-center rounded-md border border-transparent  px-12 py-1 text-base font-medium text-sm text-white shadow-md  focus:outline-none ring-0 "
                  >
                    Submit
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Announcement;
