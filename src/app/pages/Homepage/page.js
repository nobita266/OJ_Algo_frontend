"use client";
import React, { useEffect, useState } from "react";
import { problemList } from "../api/problemList";
import Link from "next/link";
import Navbar from "@/app/component/navbar/navbar";
import Footer from "@/app/component/footer/footer";

function page() {
  const [allProblem, setAllProblem] = useState([]);

  useEffect(() => {
    const fetchProblemList = async () => {
      try {
        const res = await problemList();
        const z = await res.json();
        // Set the state with the fetched Aproblem list
        setAllProblem(z);
      } catch (error) {
        console.error("Error fetching problem List:", error);
      }
    };
    fetchProblemList();
  }, []);

  const sortedProblems = [...allProblem].sort(
    (a, b) => a.problemNumber - b.problemNumber
  );

  return (
    <div>
      <Navbar />
      <div className=" w-screen ">
        <h1 className="bg-gray-950  text-white flex justify-center items-center text-xl p-2 mt-1">
          List of problems
        </h1>
        <ul className="">
          {sortedProblems.map((problem) => (
            <li
              className=" border-b-2 p-4 border-b-black text-xl hover:text-blue-500"
              key={problem.problemNumber}
            >
              <Link href={`/pages/${problem._id}`}>
                {problem.problemNumber}: {problem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default page;
