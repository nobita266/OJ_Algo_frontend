const ENDPOINT = "https://oj-algo.onrender.com";
export const problemList = async () =>
  await fetch(`${ENDPOINT}/problems`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
