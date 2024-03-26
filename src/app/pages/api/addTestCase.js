const ENDPOINT = "https://oj-algo.onrender.com";
export const addTestcase = async (payload) =>
  await fetch(`${ENDPOINT}/addTestcases`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
