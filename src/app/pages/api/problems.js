const ENDPOINT = "https://oj-algo.onrender.com";
export const problem = async (problemNumber) =>
  await fetch(`${ENDPOINT}/problems/${problemNumber}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
