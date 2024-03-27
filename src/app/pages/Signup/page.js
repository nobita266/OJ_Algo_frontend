"use client";
import React, { useState } from "react";
import { fieldValidation } from "../../helpers/validator";
import { userSignup } from "../api/auth";

import { useRouter } from "next/navigation";
import Link from "next/link";

const defaultUserData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const defaultError = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(defaultUserData);
  const [errors, setErrors] = useState(defaultError);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };

  const handleFirstName = (e) => {
    e.preventDefault();
    setUserData((prev) => ({ ...prev, firstName: e.target.value }));
  };

  const handleLastName = (e) => {
    e.preventDefault();
    setUserData((prev) => ({ ...prev, lastName: e.target.value }));
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setUserData((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePassword = (e) => {
    setUserData((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setUserData((prev) => ({
      ...prev,
      confirmPassword: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = userData;
    const { isDataValid, msg, field } = fieldValidation(userData);

    if (!isDataValid) {
      setErrors({ ...defaultError, [field]: msg });
      setErrorMessage(msg); // Set error message for frontend display
      return;
    }

    setIsLoading(true);
    try {
      const res = await userSignup({ firstName, lastName, email, password });
      if (res.ok) {
        const result = await res.json();
        localStorage.setItem("accessToken", result.accessToken);
        setErrorMessage(
          "Congratulations! Your account has been created successfully"
        );
        setUserData(defaultUserData);
        router.replace("/pages/Homepage");
      } else {
        const { msg } = await res.json();
        setErrorMessage(msg); // Set error message for frontend display
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later."); // Generic error message
    }

    setIsLoading(false);
  };

  return (
    <div
      className="bg-slate-400  w-screen h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/netflix.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        className="w-1/2 h-1/2 bg-[rgba(0,0,0,0.7)] flex flex-col p-2 rounded-3xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white text-2xl font-bold">Sign Up</h1>
        {/* Input fields and error messages */}
        <input
          type="text"
          className="input-field mb-2 h-8 "
          placeholder="First Name"
          name="firstName"
          value={userData.firstName}
          onChange={handleFirstName}
        />
        {errors.firstName && (
          <span className="input-error">{errors.firstName}</span>
        )}
        <input
          type="text"
          className="input-field mb-2 h-8 "
          placeholder="Last Name"
          name="lastName"
          value={userData.lastName}
          onChange={handleLastName}
        />
        {errors.lastName && (
          <span className="input-error">{errors.lastName}</span>
        )}
        <input
          type="text"
          className="h-8 mb-2"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleEmail}
        />
        {errors.email && <span className="input-error">{errors.email}</span>}
        <input
          type={showPassword ? "text" : "password"}
          className="input-field h-8 mb-2"
          placeholder="Password"
          value={userData.password}
          onChange={handlePassword}
        />
        <input
          type={showPassword ? "text" : "password"}
          className="h-8 mb-2"
          placeholder="confirm Password"
          value={userData.confirmPassword}
          name="confirmPassword"
          onChange={handleConfirmPassword}
        />
        {errors.confirmPassword && (
          <span className="input-error text-white">
            {errors.confirmPassword}
          </span>
        )}
        {/* Error message display */}
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
        <button
          className="bg-blue-600 text-white rounded-md h-8"
          disabled={isLoading}
        >
          Sign Up
        </button>
        <p className="text-white">
          Already have an account?
          <span>
            <Link className="text-blue-600 font-semibold" href={"/pages/Login"}>
              Sign In
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Page;
