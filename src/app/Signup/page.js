"use client";
import React, { useState } from "react";
import { fieldValidation } from "../helpers/validator";
import { userSignup } from "../api/auth";

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
function page() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(defaultUserData);
  const [errors, setErrors] = useState(defaultError);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };
  const handleFirstName = (e) => {
    setUserData((prev) => ({ ...prev, firstName: e.target.value }));
  };
  const handleLastName = (e) => {
    setUserData((prev) => ({ ...prev, lastName: e.target.value }));
  };
  const handleEmail = (e) => {
    setUserData((prev) => ({ ...prev, email: e.target.value }));
  };
  const handlePassword = (e) => {
    setUserData((prev) => ({ ...prev, password: e.target.value }));
  };
  const handleConfirmPassword = (e) => {
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
      setErrors({ [field]: msg });
      return;
    }
    setIsLoading(true);
    await userSignup({ firstName, lastName, email, password }).then(
      async (res) => {
        if (res.ok) {
          console.log(
            "congratulation your account has been created successfully"
          );
          setUserData(defaultUserData);
        } else if (!res.ok) {
          const { msg } = await res.json();
        }
      }
    );
  };
  return (
    <div className="bg-slate-400  w-screen h-screen flex justify-center items-center">
      <form
        className="w-1/2 h-1/2 bg-red-400 flex flex-col p-2 "
        onSubmit={handleSubmit}
      >
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
        {/* <span className="show-hide" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide" : "show"}
        </span> */}
        <input
          type={showPassword ? "text" : "password"}
          className="h-8 mb-2"
          placeholder="confirm Password"
          value={userData.confirmPassword}
          name="confirmPassword"
          onChange={handleConfirmPassword}
        />
        {/* <span className="show-hide none" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide" : "show"}
        </span> */}
        {errors.confirmPassword && (
          <span className="input-error">{errors.confirmPassword}</span>
        )}
        <button className="bg-blue-600 text-white rounded-md h-8">
          sign up
        </button>
      </form>
    </div>
  );
}

export default page;
