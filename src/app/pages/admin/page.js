"use client";
import React, { useEffect, useState } from "react";
import Accordion from "@/app/component/accordion/accordion"; // Adjust the import path as necessary
import { addProblem } from "../api/addProblem";
import { problemList } from "../api/problemList";
import Link from "next/link";
import { removeProblem } from "../api/removeProblem";
import { addTestcase } from "../api/addTestCase";
import Navbar from "@/app/component/navbar/navbar";

function Page() {
  const [allProblem, setAllProblem] = useState([]);
  const [testInput, setTestInput] = useState("");
  const [expectedOutput, setExpectedOutput] = useState("");
  const [problemId, setProblemId] = useState("");

  useEffect(() => {
    fetchProblemList();
  }, []);
  const fetchProblemList = async () => {
    try {
      const res = await problemList();
      const z = await res.json();
      setAllProblem(z);
      // console.log("problem+", allProblem.length);

      // // console.log(allProblem);
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
    problemType: "",
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
        // console.log("failed to deleted problem");
      } else {
        // console.log("problem deleted successfully");
        fetchProblemList();
      }
    } catch (error) {
      console.error("Error deleting problem:", error);
      // Handle error if needed
    }
  };
  const handleSubmitTestCase = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        problemId,
        testInput,
        expectedOutput,
      };
      // console.log(payload);
      const testCase = await addTestcase(payload);
      const res = await testCase.json();
      if (res.ok) {
        // console.log("testcase added succesfully");
      } else {
        // console.log(res, "not added testcase");
      }
    } catch (error) {
      // console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., sending the data to your backend
    const payload = {
      problemNumber: allProblem.length + 1,
      name: formState.name,
      statement: formState.statement,
      examples: examples,
      constraints: formState.constraints,
      problemType: formState.problemType,
    };
    // console.log(payload);
    try {
      const res = await addProblem(payload);
      if (res.ok) {
        // console.log("problem added successfully", res);
      } else {
        // console.log(res.status);
      }
    } catch (err) {
      // console.log(err.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <Accordion title="Add more problems +">
          <form onSubmit={handleSubmit} className="space-y-4 ">
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
              <select value={formState.problemType} onChange={handleChange}>
                <option value="Array">Array</option>
                <option value="String">String</option>
                <option value="Stack">Stack</option>
                <option value="Linkedlist">inkedlist</option>
                <option value="Queue">Queue</option>
                <option value="Tree">Tree</option>
              </select>
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
                  onChange={(e) =>
                    updateExample(index, "input", e.target.value)
                  }
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <label>output</label>
                <input
                  type="text"
                  name={`example-${index}-output`}
                  value={example.output}
                  onChange={(e) =>
                    updateExample(index, "output", e.target.value)
                  }
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
                    href={`/pages/${problem._id}`}
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
        <Accordion title="Add Test Case">
          <div>
            <label htmlFor="problemId">Problem ID:</label>
            <input
              type="text"
              id="problemId"
              value={problemId}
              onChange={(e) => setProblemId(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="testInput">Test Input:</label>
            <input
              type="text"
              id="testInput"
              value={testInput}
              onChange={(e) => setTestInput(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="expectedOutput">Expected Output:</label>
            <input
              type="text"
              id="expectedOutput"
              value={expectedOutput}
              onChange={(e) => setExpectedOutput(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleSubmitTestCase}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </Accordion>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Page;
