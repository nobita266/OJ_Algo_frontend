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

function LoginPage() {
  const [userCredentials, setUserCredentials] = useState(
    defaultUserCredentials
  );
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleEmailChange = (e) => {
    setUserCredentials((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setUserCredentials((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isDataValid, field, msg } = fieldValidation(userCredentials);
    if (!isDataValid) {
      setErrors({ [field]: msg });
      return;
    }

    setIsLoading(true);
    try {
      const res = await userLogin(userCredentials);
      if (res.ok) {
        const { accessToken } = await res.json();
        localStorage.setItem("accessToken", accessToken);
        router.replace(`/pages/Homepage`);
      } else {
        const { msg } = await res.json();
        setErrors({ login: msg });
      }
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      setErrors({
        login: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="main-container h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/netflix.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-[rgba(0,0,0,0.7)] w-1/2 h-1/2">
        <div className="login_container flex flex-col justify-center items-center gap-3">
          <h1 className="text-white font-[700] text-[3rem]">Sign In</h1>
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={userCredentials.email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email}</div>
              )}
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={userCredentials.password}
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <div className="text-red-500">{errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="bg-red-600 w-full"
              disabled={isLoading}
            >
              Login
            </button>
            <button
              onClick={() => router.push("/pages/Signup")}
              className="bg-blue-500 w-full"
            >
              Signup
            </button>
            {errors.login && <div className="text-red-500">{errors.login}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
