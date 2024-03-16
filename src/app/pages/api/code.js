const ENDPOINT = "https://oj-algo.onrender.com";
export const printOutput = async (payload) =>
  await fetch(`${ENDPOINT}/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
