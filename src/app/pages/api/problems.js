const ENDPOINT = "http://localhost:8000";
export const problem = async (problemId) =>
  await fetch(`${ENDPOINT}/problems/${problemId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
