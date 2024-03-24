const ENDPOINT = "http://localhost:8000";
export const fetchUsers = async () =>
  await fetch(`${ENDPOINT}/users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
