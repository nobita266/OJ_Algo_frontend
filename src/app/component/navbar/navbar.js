"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  // Component names should start with a capital letter
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const router = useRouter();

  useEffect(() => {
    console.log(localStorage);

    const token = localStorage.getItem("accessToken");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");

    setLoggedIn(false);
  };

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
    router.push("/pages/Login");

    // Update the state to reflect that the user is logged in
  };

  return (
    <>
      <div className="bg-black w-screen h-20 flex justify-between items-center">
        <div>
          <p className="text-purple-500 text-3xl">Flock Compiler</p>
        </div>
        <div className="flex gap-2">
          {loggedIn ? (
            <button className="text-white" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="text-white" onClick={handleLogin}>
              Login
            </button>
          )}
          <Link className="text-white" href={"/pages/profile"}>
            Account
          </Link>
        </div>
      </div>
      <ul
        className="flex justify-evenly bg-black text-white"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <button>Array</button>
        <button>String</button>
        <button>Hashmap</button>
        <button>Binary Tree</button>
        <button>Dynamic Programming</button>
        <button>Graph</button>
        <button>Stack</button>
        <button>Queue</button>
        <li>LinkedList</li>
      </ul>
    </>
  );
}
