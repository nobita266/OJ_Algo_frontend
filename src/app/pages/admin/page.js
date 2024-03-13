"use client";
import React, { useEffect, useState } from "react";
import Accordion from "@/app/component/accordion/accordion"; // Adjust the import path as necessary
import { addProblem } from "../api/addProblem";
import { problemList } from "../api/problemList";
import Link from "next/link";
import Footer from "@/app/component/footer/footer";
import { removeProblem } from "../api/removeProblem";

function Page() {
  const [allProblem, setAllProblem] = useState([]);

  useEffect(() => {
    fetchProblemList();
  }, []);
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
  const [examples, setExamples] = useState([
    { input: "", output: "", explanation: "" },
  ]);

  const addExample = () => {
    setExamples([...examples, { input: "", output: "", explanation: "" }]);
  };

  const updateExample = (index, field, value) => {
    const newExamples = [...examples];
    newExamples[index][field] = value;
    setExamples(newExamples);
  };
  const [formState, setFormState] = useState({
    problemNumber: "",
    name: "",
    statement: "",
    constraints: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleDelete = async (problemId) => {
    try {
      const res = await removeProblem(problemId);
      if (!res.ok) {
        console.log("failed to deleted problem");
      } else {
        console.log("problem deleted successfully");
        fetchProblemList();
      }
    } catch (error) {
      console.error("Error deleting problem:", error);
      // Handle error if needed
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., sending the data to your backend
    const payload = {
      problemNumber: formState.problemNumber,
      name: formState.name,
      statement: formState.statement,
      examples: examples,
      constraints: formState.constraints,
    };
    console.log(payload);
    try {
      const res = await addProblem(payload);
      if (res.ok) {
        console.log("problem added successfully", res);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <Accordion title="Add more problems +">
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label
              htmlFor="problemNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Problem Number
            </label>
            <input
              type="number"
              name="problemNumber"
              id="problemNumber"
              value={formState.problemNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formState.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="statement"
              className="block text-sm font-medium text-gray-700"
            >
              Statement
            </label>
            <textarea
              name="statement"
              id="statement"
              value={formState.statement}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="constraints"
              className="block text-sm font-medium text-gray-700"
            >
              Constraints
            </label>
            <textarea
              name="constraints"
              id="constraints"
              value={formState.constraints}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>

          {examples.map((example, index) => (
            <div key={index}>
              <label>Input</label>
              <input
                type="text"
                name={`example-${index}-input`}
                value={example.input}
                onChange={(e) => updateExample(index, "input", e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <label>output</label>
              <input
                type="text"
                name={`example-${index}-output`}
                value={example.output}
                onChange={(e) => updateExample(index, "output", e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <label>explaination</label>
              <input
                type="text"
                name={`example-${index}-explanation`}
                value={example.explanation}
                onChange={(e) =>
                  updateExample(index, "explanation", e.target.value)
                }
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
          <button
            onClick={addExample}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Add Example
          </button>
        </form>
      </Accordion>
      <Accordion title="Delete or update problems">
        <ul className="">
          {allProblem.map((problem) => (
            <li
              className="bg-gray-700 border-b-2 p-4 text-white text-xl "
              key={problem.problemNumber}
            >
              <div className="flex justify-between">
                <Link
                  className="hover:text-blue-500"
                  href={`/pages/${problem.problemNumber}`}
                >
                  {problem.problemNumber}: {problem.name}
                </Link>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleDelete(problem._id)}
                    className="text-white w-24 h-8 bg-red-600 rounded-3xl"
                  >
                    remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Accordion>
      <Footer />
    </div>
  );
}

export default Page;
