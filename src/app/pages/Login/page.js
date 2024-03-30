"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { userLogin } from "../api/auth";

function LoginPage() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleInputChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="main-container h-screen flex justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="bg-gray-200 rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sign In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="email"
              value={userCredentials.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={userCredentials.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14v2a2 2 0 002 2h0a2 2 0 002-2v-2m0 0V10m0 0H10m0 0a2 2 0 00-2 2v2a2 2 0 002 2h0a2 2 0 002-2v-2m0 0V10m0 0H10m5 0a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md transition duration-300 hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          {errors.login && (
            <p className="text-red-500 text-sm">{errors.login}</p>
          )}
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/pages/Signup" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
