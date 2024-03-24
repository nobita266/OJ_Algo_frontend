// "use client" is not needed in React components
"use client";

import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api/fetchUsers";
import Navbar from "@/app/component/navbar/navbar";
import Footer from "@/app/component/footer/footer";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/pages/Login");
    }
    const fetchUserList = async () => {
      try {
        const response = await fetchUsers();
        if (!response.ok) {
          console.log("Failed to fetch user data");
        }
        const userData = await response.json();

        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserList();
  }, []);

  // Function to sort users by the number of questions solved
  const sortedUsers = [...users].sort(
    (a, b) => b.solvedProblem.length - a.solvedProblem.length
  );

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-gray-600 w-1/2 p-4 text-white">
          <h1 className="text-3xl font-semibold mb-4 text-white">All Users</h1>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <p className="text-lg font-semibold w-1/3">First Name</p>
              <p className="text-lg font-semibold w-1/3">Last Name</p>
              <p className="text-lg font-semibold w-1/3">Solved Problems</p>
            </li>
            {sortedUsers.map((user, index) => (
              <li
                className="flex justify-between"
                key={index}
                style={{ fontWeight: user.isCurrentUser ? "bold" : "normal" }}
              >
                <p className="text-lg w-1/3">{user.firstname}</p>
                <p className="text-lg w-1/3">{user.lastname}</p>
                <p className="text-lg w-1/3">{user.solvedProblem.length}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Page;
