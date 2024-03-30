"use client";
import React, { useEffect, useState } from "react";
import { printOutput } from "../api/code";
import { problem } from "../api/problems";

import { useRouter } from "next/navigation";
import { submitCode } from "../api/submitCode";
import Navbar from "@/app/component/navbar/navbar";

function Page({ params }) {
  const router = useRouter();

  const [code, setCode] = useState(
    "#include <bits/stdc++.h>\nusing namespace std;\nint main(){\nreturn 0;\n}\n"
  );
  const [problemId, setProblemId] = useState(params.Compiler);
  const [errorMessage, setErrorMessage] = useState("");
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [problemNumber, setProblemNumber] = useState(0);
  const [name, setName] = useState("");
  const [statement, setStatement] = useState("");
  const [examples, setExamples] = useState([]);
  const [constraints, setConstraints] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  useEffect(() => {
    const fetchProblemDetails = async () => {
      try {
        const res = await problem(problemId);

        if (!res.ok) {
          router.replace("/pages/Homepage");
        }
        const qusDetails = await res.json();

        setName(qusDetails.name);
        setStatement(qusDetails.statement);
        setExamples(qusDetails.examples);
        setConstraints(qusDetails.constraints);
        setProblemNumber(qusDetails.problemNumber);
        // console.log(qusDetails);
      } catch (error) {
        console.error("Error fetching problem details:", error);
      }
    };

    fetchProblemDetails();
  }, [problemId, router, input, output]);

  const handleCodeSubmit = async () => {
    setIsSubmitting(true);
    const payload = { code, language, problemId };
    // console.log(payload);
    // console.log(localStorage.getItem("accessToken"));
    try {
      const res = await submitCode(payload);
      // console.log("Response status:", res.status);
      const result = await res.json();
      // console.log("Response body:", result);

      if (res.status === 200) {
        setResultMessage("All test cases submitted successfully!");
      } else if (result.yourOutput) {
        setResultMessage(
          `${result.msg} input: ${result.yourOutput.input}\n yourOutput: ${result.yourOutput.actualOutput}\n expectedOutput: ${result.yourOutput.expectedOutput} `
        );
      } else {
        setResultMessage(
          "Error in submitting code: Unexpected response format"
        );
      }
    } catch (error) {
      setResultMessage("Error in submitting code: " + error.message);
      // console.log("Error in submitting code:", error.message);
    }

    setIsSubmitting(false);
  };

  const handleSubmit = async () => {
    setIsRunning(true);
    // console.log(input);
    const payload = {
      language,
      code,
      input,
    };
    // console.log(payload);
    try {
      const res = await printOutput(payload);
      const z = await res.json();

      // console.log("Response:", z);
      // console.log(z.err);

      const output = z.output;
      // console.log(output);

      if (output !== undefined) {
        setErrorMessage("");
        setOutput(output);
      } else {
        setErrorMessage(z.err.stderr.split("error")[1]);
        // console.log("Output not found in response:hello", z.err.stderr);
      }
    } catch (error) {
      console.error("Error:", error.message);
      setErrorMessage(error.message);
    }
    setIsRunning(false);
  };

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex">
        <div className="left w-1/2 h-screen text-gray-950 flex flex-col gap-4 bg-slate-200 space-y-2">
          <h1 className="text-3xl font-semibold mt-2 b">
            <span>{problemNumber}</span> {name}
          </h1>
          <p className="mb-2">
            <strong className="text-xl">
              Statement: <br />
            </strong>{" "}
          </p>
          <p className="text-xl"> {statement}</p>
          <div>
            {examples.map((example, index) => (
              <div key={index} className="flex flex-col gap-4">
                <p className="text-xl">
                  <strong>Input:</strong> {example.input}
                </p>
                <p>
                  <strong className="text-xl">Output:</strong> {example.output}
                </p>
                <p className="text-xl">
                  <strong>Explanation:</strong> {example.explanation}
                </p>
              </div>
            ))}
          </div>
          <p className="flex flex-col ">
            {" "}
            <strong className="text-xl">Constraints:</strong>
            <br />
            {constraints}
          </p>
        </div>
        <div className="right w-1/2 h-screen bg-slate-100">
          <h1 className="font-bold text-3xl">online code compiler</h1>
          <span>
            <label>Language: </label>
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                // console.log(e.target.value);
              }}
            >
              <option value="cpp">C++</option>
              <option value="py">Python</option>
            </select>
          </span>

          <textarea
            rows="20"
            cols="75"
            className="h-3/4 w-full bg-gray-900 text-green-500 text-xl"
            value={code}
            onChange={(e) => {
              e.preventDefault();
              setCode(e.target.value);
            }}
          ></textarea>
          <br />

          <button
            className={`submit_code bg-green-700 rounded-sm text-white w-1/2 ${
              isRunning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            disabled={isRunning}
          >
            Run
          </button>

          <button
            className={`submit_code bg-blue-700 rounded-sm text-white w-1/2 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleCodeSubmit}
            disabled={isSubmitting}
          >
            Submit
          </button>
          <p>Test Input</p>
          <textarea
            rows="5"
            cols="15"
            value={input}
            placeholder="Input"
            onChange={(e) => setInput(e.target.value)}
            className="w-full border border-solid border-black"
          ></textarea>
          <p>Output</p>
          <textarea
            value={output}
            className="w-full border border-solid border-black"
            readOnly
          ></textarea>
          {errorMessage && <div className="text-red-600">{errorMessage}</div>}
          {resultMessage && (
            <div className="text-green-600">{resultMessage}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
