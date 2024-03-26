const ENDPOINT = "https://oj-algo.onrender.com";
export const fetchUsers = async () =>
  await fetch(`${ENDPOINT}/users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
