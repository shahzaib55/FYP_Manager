import { React, useContext, useRef, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/Auth";
import { useNavigate } from "react-router-dom";
function Otp() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);
  const num4Ref = useRef(null);
  const btnRef = useRef(null);

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  var email = localStorage.getItem("email");
  // let user = localStorage.getItem("user");
  //  user = user?JSON.parse(user) : user
  //           console.log(user.data[0].email);
  // var user = localStorage.getItem("user");
  //           console.log(user.data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (num1 === "" || num2 === "" || num3 === "" || num4 === "") {
    } else {
      
      const otp = num1 + num2 + num3 + num4;

      const response = await axios
        .post("http://localhost:8080/login/verify", {
          email: email,
          otp: otp,
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.removeItem("email");
            localStorage.setItem("user",JSON.stringify(res.data));
            
            // console.log(JSON.stringify(res.data));
            // navigate("/dashboard/");
            
          } else if (res.status === 401) {
            console.log("failed");
          } else if (res.status === 404) {
            console.log("failed");
          } else {
            console.log("failed");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const num1Keyup = () => {
    num2Ref.current.focus();
  };
  const num2Keyup = () => {
    num3Ref.current.focus();
  };
  const num3Keyup = () => {
    num4Ref.current.focus();
  };
  const num4Keyup = () => {
    btnRef.current.focus();
  };

  return (
    <>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div class="flex flex-col items-center justify-center text-center space-y-2">
              <div class="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div class="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email {email}</p>
              </div>
            </div>

            <div>
              <form>
                <div class="flex flex-col space-y-16">
                  <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div class="w-16 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="num1"
                        id="num1"
                        maxlength="1"
                        onChange={(e) => setNum1(e.target.value)}
                        value={num1}
                        ref={num1Ref}
                        onKeyUp={num1Keyup}
                        autoFocus
                      />
                    </div>
                    <div class="w-16 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="num2"
                        id="num2"
                        maxlength="1"
                        onChange={(e) => setNum2(e.target.value)}
                        value={num2}
                        ref={num2Ref}
                        onKeyUp={num2Keyup}
                      />
                    </div>
                    <div class="w-16 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="num3"
                        id="num3"
                        maxlength="1"
                        onChange={(e) => setNum3(e.target.value)}
                        value={num3}
                        ref={num3Ref}
                        onKeyUp={num3Keyup}
                      />
                    </div>
                    <div class="w-16 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="num4"
                        id="num4"
                        maxlength="1"
                        onChange={(e) => setNum4(e.target.value)}
                        value={num4}
                        ref={num4Ref}
                        onKeyUp={num4Keyup}
                      />
                    </div>
                  </div>

                  <div class="flex flex-col space-y-5">
                    <div>
                      <button
                        class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                        onClick={handleSubmit}
                        ref={btnRef}
                      >
                        Verify Account
                      </button>
                    </div>

                    <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        class="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
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

export default Otp;
