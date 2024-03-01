"use client";
import React, { useEffect, useState } from "react";
import { problemList } from "../api/problemList";
import Link from "next/link";

function page() {
  const [name, setName] = useState("");
  const [allProblem, setAllProblem] = useState([]);

  useEffect(() => {
    const fetchProblemList = async () => {
      try {
        const res = await problemList();
        const z = await res.json();
        setAllProblem(z);

        console.log(allProblem);
      } catch (error) {
        console.error("Error fetching problem List:", error);
      }
    };
    fetchProblemList();
  }, []);
  return (
    <div>
      <h1>List of problems</h1>
      <ul>
        {allProblem.map((problem) => (
          <li key={problem.problemNumber}>
            <Link href={`/pages/${problem.problemNumber}`}>
              {problem.problemNumber}: {problem.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
