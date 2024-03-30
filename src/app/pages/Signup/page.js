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

function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(defaultUserData);
  const [errors, setErrors] = useState(defaultError);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = userData;
    const { isDataValid, msg, field } = fieldValidation(userData);

    if (!isDataValid) {
      setErrors({ ...defaultError, [field]: msg });
      setErrorMessage(msg);
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
        setErrorMessage(msg);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <form
        className="bg-gray-200 p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="First Name"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName}</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Last Name"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName}</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="absolute top-0 right-0 px-3 py-2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword}</span>
          )}
        </div>
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
        <p>
          Already have an account?{" "}
          <a href="/pages/Login" className="text-blue-500 hover:underline">
            Sign in here
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
