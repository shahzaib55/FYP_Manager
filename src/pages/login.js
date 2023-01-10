// import { useState } from "react";
import img from "../assets/images/logo.jpg";
import "../App.css";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
// import { useForm } from "react-hook-form";
export default function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrMsg("All Fields are required");
    } else {
      if (email === "admin@gmail.com" && password === "123") {
        navigate("/dashboard/");
      } else {
        setErrMsg("Wrong Email or Password");
      }
    }
    console.log(email, password);
  };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     user_email: "",
  //     user_password: "",
  //   },
  // });
  //   const api = async() =>{
  //     const result = fetch("https://beautypredictor.000webhostapp.com/fyp/login.php",{
  //       method: 'POST',
  //       headers:{
  //         "Content-Type":"application/json",
  //         "Accept":"application/json"
  //       },
  //       body: JSON.stringifser_email,user_password}))
  //     });
  //     result = await result.json();
  //     console.warn(result);
  //     localStorage.setItem("user-info",JSON.stringify(result));
  //     const url = './dashboard';
  //     history.pushState(result, '', url);

  //  }
  return (
    <>
      <div class="bg flex flex-col md:items-end sm:items-center min-h-screen bg-black ">
        <div class="bg-white items-center min-h-screen shadow-3xl sm:w-[35rem] rounded-l-3xl">
          <div class="flex justify-center mt-10 ">
            <img className="mx-auto h-20 w-auto" src={img} alt="Your Company" />
          </div>
          <div class="flex justify-center mt-5 font-bold text-3xl font-sans">
            <h1>SUPERIOR</h1>
          </div>
          <div class="flex justify-center mt-2 text-slate-500 font-medium  font-sans">
            <h1>To sign In please enter your email and password</h1>
          </div>
          {/* {errMsg && (
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Holy smokes!</strong>
          <span class="block sm:inline">Something seriously bad happened.</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>)} */}
          <p
            ref={errRef}
            className={errMsg ? "errmsg text-red-500" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div>
            <div class="flex flex-col item-center mt-10 md:px-28 ">
              <form class="" action="#" method="POST">
                <div class=" items-center justify-center">
                  <div class="flex mb-6 items-center justify-center mr-10">
                    <div class="flex">
                      <span class="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 stroke-gray-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="flex">
                      <div class="relative z-0 Icons-outside left-3">
                        <div class="flex items-center border-b border-gray-500  w-60">
                          <input
                            id="email-address"
                            name="email"
                            type="email"
                            ref={userRef}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            autoComplete=""
                            required
                            // {...register("user_email")}
                            className="border-none focus:outline-none focus:ring-0 w-full py-3 pl-1 text-gray-600 "
                            placeholder="Enter Your email"
                          />
                          <p className="text-red-500 ml-0">
                            {/* {" "}
                            {errors.email?.message} */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex mb-2 items-center justify-center mr-10">
                    <div class="flex">
                      <span class="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 stroke-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex">
                      <div className="relative z-0 focus:outline-none left-3">
                        <div className="items-center border-b border-gray-500 w-60">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            autoComplete=""
                            required
                            // {...register("user_password")}
                            className="border-none focus:outline-none focus:ring-0 w-full py-3 pl-1 text-gray-600 "
                            placeholder="Password"
                          />
                          {/* <p className="text-red-500 ml-0">
                            {" "}
                            {errors.password?.message}
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end mr-10 mb-10 ">
                      <a href="/forgot" className=" text-blue-500 ">
                        forgot password?
                      </a>
                    </div>
                  </div>
                  <div class="items-center justify-center">
                    <button
                      type="submit"
                      className="btn items-center rounded-md border border-transparent  px-20 py-2 text-base font-medium text-white shadow-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={handleSubmit}
                      // ((data) => {
                      //   console.log(data);
                      //  })
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
