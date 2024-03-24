const ENDPOINT = "http://localhost:8000";
export const removeProblem = async (_id) =>
  await fetch(`${ENDPOINT}/problems/${_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
