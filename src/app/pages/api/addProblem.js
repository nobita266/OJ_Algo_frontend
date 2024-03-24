const ENDPOINT = "http://localhost:8000";
export const addProblem = async (payload) =>
  await fetch(`${ENDPOINT}/problems`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
