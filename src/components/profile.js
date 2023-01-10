import React from "react";
import Mymodel from "./mymodel";
import { useState } from "react";
function Profile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="h-[91%] flex flex-col ">
        <div className="flex justify-start sm:w-full sm:max-w-md ml-5">
          <h2 className="mt-6  text-lg font-bold text-gray-600">
            Profile Info
          </h2>
        </div>

        <div className="mt-8 sm:w-full sm:max-w-md ml-5 h-[100%]">
          <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10 shadow-lg h-full">
            <div className="flex flex-row">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex flex-col w-[50%] justify-start">
                <h1 className="font-sans font-bold text-sm text-gray-500">
                  Jawad Ahmed
                </h1>
                <p className="font-sans font-md text-md text-gray-500">
                  Manager
                </p>
              </div>
              <div className="flex justify-end w-[50%]">
                <button onClick={() => setShow(true)}>
                  <a
                    className="font-sans font-bold text-sm text-indigo-500"
                    href="#"
                  >
                    Edit
                  </a>
                </button>
              </div>
            </div>
            <div className="flex flex-row mt-10">
              <h1 className="font-sans font-bold text-sm text-gray-500">
                First Name:
              </h1>
              <p className="font-sans font-md text-md text-gray-500 ml-3">
                Jawad
              </p>
            </div>
            <div className="flex flex-row mt-3">
              <h1 className="font-sans font-bold text-sm text-gray-500">
                Last Name:
              </h1>
              <p className="font-sans font-md text-md text-gray-500 ml-3">
                Ahmed
              </p>
            </div>
            <div className="flex flex-row mt-3">
              <h1 className="font-sans font-bold text-sm text-gray-500">
                Email:
              </h1>
              <p className="font-sans font-md text-md text-gray-500 ml-3">
                admin@gmail
              </p>
            </div>
            <div className="flex flex-row mt-3">
              <h1 className="font-sans font-bold text-sm text-gray-500">
                Mobile:
              </h1>
              <p className="font-sans font-md text-md text-gray-500 ml-3">
                0300000000
              </p>
            </div>
            <div className="flex flex-row mt-3 pb-20">
              <h1 className="font-sans font-bold text-sm text-gray-500">
                Password:
              </h1>
              <p className="font-sans font-md text-md text-gray-500 ml-3">
                A1BBD5
              </p>
            </div>
          </div>
        </div>
      </div>
      <Mymodel onClose={handleClose} visible={show} />
    </>
  );
}

export default Profile;
