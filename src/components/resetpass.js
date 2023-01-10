import React from "react";
import img from "../assets/images/logo.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Resetpass() {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass === "" || confirmPass === "") {
      setErrMsg("All Fields are required");
    }

    navigate("/");
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src={img} alt="Your Company" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Reset Your Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter Your new Password
            {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    start your 14-day free trial
                  </a> */}
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div className="flex flex-col justify-start items-start w-full md:ml-5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="mt-1">
                  <input
                    id="pass"
                    name="password"
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                    autoComplete=""
                    required
                    className=" w-80 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-start items-start w-full md:ml-5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="cpass"
                    name="cpassword"
                    type="password"
                    onChange={(e) => setConfirmPass(e.target.value)}
                    autoComplete=""
                    required
                    className=" w-80 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className=" flex">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="flex w-60 mx-auto justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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

export default Resetpass;
