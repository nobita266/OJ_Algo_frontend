const ENDPOINT = "https://oj-algo.onrender.com";
export const problem = async (problemId) =>
  await fetch(`${ENDPOINT}/problems/${problemId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
