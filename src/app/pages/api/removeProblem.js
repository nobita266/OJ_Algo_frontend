const ENDPOINT = "https://oj-algo.onrender.com";
export const removeProblem = async (_id) =>
  await fetch(`${ENDPOINT}/problems/${_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
