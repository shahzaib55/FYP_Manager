import img from "../assets/images/logo.jpg";
import "../App.css";
import { useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";

import axios from "../api/axios";
// const LOGIN_URL = "/login";
export default function Login() {
  
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrMsg("All Fields are required");
    } else {
      try {
        const response = await axios.post(
          "/login",
          { email: email, password: password },
        )
        console.log(response);
        // setAuth({ email, password, token});
        if(response.status === 200){
          localStorage.setItem("email",email);
          navigate("/login/verify");

        }else if(response.status === 404){
          setErrMsg("Wrong Email or Password");
        }else if(response.status === 401){
          setErrMsg("Wrong Email or Password");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      {loading ? (
        <div className="flex w-screen h-screen justify-center items-center">
          <div>
            <BounceLoader color={"#d66198"} loading={loading} size={50} />
          </div>
        </div>
      ) : (
        <div class="bg flex flex-col md:items-end sm:items-center min-h-screen bg-black ">
          <div class="bg-white items-center min-h-screen shadow-3xl sm:w-[35rem] rounded-l-3xl">
            <div class="flex justify-center mt-10 ">
              <img
                className="mx-auto h-20 w-auto"
                src={img}
                alt="Your Company"
              />
            </div>
            <div class="flex justify-center mt-5 font-bold text-3xl font-sans">
              <h1>SUPERIOR</h1>
            </div>
            <div class="flex justify-center mt-2 text-slate-500 font-medium  font-sans">
              <h1>To sign In please enter your email and password</h1>
            </div>
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
                              className="border-none focus:outline-none focus:ring-0 w-full py-3 pl-1 text-gray-600 "
                              placeholder="Enter Your email"
                            />
                            <p className="text-red-500 ml-0"></p>
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
                              className="border-none focus:outline-none focus:ring-0 w-full py-3 pl-1 text-gray-600 "
                              placeholder="Password"
                            />
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
      )}
    </>
  );
}
