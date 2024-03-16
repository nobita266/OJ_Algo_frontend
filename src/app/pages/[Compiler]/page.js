"use client";
import React, { useEffect, useState } from "react";
import { printOutput } from "../api/code";
import { problem } from "../api/problems";

import { useRouter } from "next/navigation";

function page({ params }) {
  const router = useRouter();

  const [code, setCode] = useState(
    "#include <bits/stdc++.h>\nusing namespace std;\nint main(){\nreturn 0;\n}\n"
  );
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [problemNumber, setproblemNumber] = useState(parseInt(params.Compiler));
  const [name, setName] = useState("");
  const [statement, setStatement] = useState("");
  const [examples, setExamples] = useState([]);
  const [constraints, setConstraints] = useState("");
  useEffect(() => {
    const fetchProblemDetails = async () => {
      try {
        const res = await problem(problemNumber);
        if (!res.ok) {
          router.replace("/pages/Homepage");
        }
        const qusDetails = await res.json();

        setName(qusDetails.name);
        setStatement(qusDetails.statement);
        setExamples(qusDetails.examples);
        setConstraints(qusDetails.constraints);
        console.log(qusDetails);
      } catch (error) {
        console.error("Error fetching problem details:", error);
      }
    };

    fetchProblemDetails();
  }, [problemNumber]);

  const handleSubmit = async () => {
    // e.preventDefault();
    console.log(input);
    const payload = {
      language,
      code,
      input,
    };
    console.log(payload);
    try {
      const res = await printOutput(payload);
      const z = await res.json();

      console.log("Response:", z); // Check the structure of the response object

      // Access the output depending on the structure of the response object
      const output = z.output;
      console.log(output);

      if (output !== undefined) {
        // Update the output state
        setOutput(output);
      } else {
        console.log("Output not found in response:", res);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="left w-1/2 h-screen text-gray-950 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
          <span>{problemNumber}</span> {name}
        </h1>
        <p>
          <strong>
            problem statment: <br />
          </strong>{" "}
          {statement}
        </p>
        <div>
          {examples.map((example, index) => (
            <div key={index}>
              <p>
                <strong>Input:</strong> {example.input}
              </p>
              <p>
                <strong>Output:</strong> {example.output}
              </p>
              <p>
                <strong>Explanation:</strong> {example.explanation}
              </p>
            </div>
          ))}
        </div>
        <p>
          {" "}
          <strong>constraints:</strong>
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
              console.log(e.target.value);
            }}
          >
            <option value="cpp">c++</option>
            <option value="py">python</option>
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
          className="submit_code bg-green-700 rounded-sm text-white w-1/2 "
          onClick={handleSubmit}
        >
          run
        </button>

        <button
          className="submit_code bg-blue-700 rounded-sm text-white w-1/2 "
          onClick={handleSubmit}
        >
          submit
        </button>
        <p>TestInput</p>
        <textarea
          rows="5"
          cols="15"
          value={input}
          placeholder="Input"
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-solid border-black"
        ></textarea>
        <p>output</p>
        {output && (
          <textarea className="w-full border border-solid border-black">
            {output}
          </textarea>
        )}
        {/* <h1>{output}</h1> */}
      </div>
    </div>
  );
}

export default page;
