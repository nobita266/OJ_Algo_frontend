"use client";
import React from "react";

import Image from "next/image";
import logo from "../../../../public/netflix.jpg";
import { useState } from "react";
import { fieldValidation } from "../../helpers/validator";
import { userLogin } from "../api/auth";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
const defaultUserCredentials = {
  email: "",
  password: "",
};
const defaultError = {};
function page() {
  const [userCredentials, setUserCredentials] = useState(
    defaultUserCredentials
  );
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(defaultError);
  const handleEmail = (e) => {
    setUserCredentials((prev) => ({ ...prev, email: e.target.value }));
  };
  const handlePassword = (e) => {
    console.log("enter");
    setUserCredentials((prev) => ({ ...prev, password: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userCredentials);
    const { isDataValid, field, msg } = fieldValidation(userCredentials);
    if (!isDataValid) {
      setErrors({ [field]: msg });
      return;
    }
    setIsLoading(true);
    await userLogin(userCredentials)
      .then(async (res) => {
        if (res.ok) {
          const { userData, accessToken, msg } = await res.json();

          console.log(userData);
          localStorage.setItem("accessToken", userData.accessToken);

          router.replace(`/pages/Homepage`);
          return;
        }
        if (!res.ok) {
          const { msg } = await res.json();
          console.log(msg);

          // redirect(`/Homepage`);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="main-container  h-screen w-screen flex  justify-center items-center ">
        <div className="bg-[rgba(0,0,0,0.7)] w-1/2 h-1/2  ">
          <div className="login_container flex flex-col justify-center items-center gap-3">
            <h1 className="text-white font-[700] text-[3rem]">Sign In</h1>
            <form className="space-y-2 " onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="email"
                  value={userCredentials.email}
                  onChange={handleEmail}
                />
              </div>
              <div>
                <input
                  type={showPassword == true ? "text" : "password"}
                  placeholder="Password"
                  value={userCredentials.password}
                  onChange={handlePassword}
                />
              </div>

              <button type="submit" className="bg-red-600 w-full">
                Login
              </button>
              <button
                onClick={() => {
                  router.push("/pages/Signup");
                }}
                className="bg-blue-500 w-full"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
