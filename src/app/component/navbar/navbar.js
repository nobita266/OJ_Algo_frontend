"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  // Component names should start with a capital letter
  const [loggedIn, setLoggedIn] = useState(false); //
  const router = useRouter();

  useEffect(() => {
    // console.log(localStorage);

    const token = localStorage.getItem("accessToken");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("accessToken");

    setLoggedIn(false);
  };

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
    router.push("/pages/Login");

    // Update the state to reflect that the user is logged in
  };
  const handleProfilePage = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      router.push("/pages/Profile");
    } else {
      router.replace("/pages/Login");
    }
  };
  const handleAdminPage = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      router.push("/pages/admin");
    } else {
      router.replace("/pages/Login");
    }
  };

  return (
    <>
      <div className="bg-black w-screen h-20 flex justify-between items-center">
        <div className="m-7">
          <Link
            href={"/pages/Homepage"}
            className="text-purple-500 text-4xl font-semibold"
          >
            Flock Compiler
          </Link>
        </div>
        <div className="flex gap-2 mr-4 font-semibold ">
          {loggedIn ? (
            <button
              className="text-white bg-red-600 w-20 h-8 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="text-white bg-blue-600 w-20 h-8 rounded-md"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
          <button
            className="text-white bg-emerald-500 w-20 h-8 rounded-md"
            onClick={handleProfilePage}
          >
            Profile
          </button>
          <button
            className="text-white bg-blue-600 w-20 h-8 rounded-md"
            onClick={handleAdminPage}
          >
            Admin
          </button>
        </div>
      </div>
      <ul
        className="flex justify-evenly bg-black text-white"
        onClick={() => {
          // console.log("clicked");
        }}
      >
        {/* <button>Array</button>
        <button>String</button>
        <button>Hashmap</button>
        <button>Binary Tree</button>
        <button>Dynamic Programming</button>
        <button>Graph</button>
        <button>Stack</button>
        <button>Queue</button>
        <li>LinkedList</li> */}
      </ul>
    </>
  );
}
