const ENDPOINT = "http://localhost:8000";
export const problem = async (problemNumber) =>
  await fetch(`${ENDPOINT}/problems/${problemNumber}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
