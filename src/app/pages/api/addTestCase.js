const ENDPOINT = "http://localhost:8000";
export const addTestcase = async (payload) =>
  await fetch(`${ENDPOINT}/addTestcases`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
