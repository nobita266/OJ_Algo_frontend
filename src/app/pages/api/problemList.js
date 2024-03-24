const ENDPOINT = "http://localhost:8000";
export const problemList = async () =>
  await fetch(`${ENDPOINT}/problems`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
