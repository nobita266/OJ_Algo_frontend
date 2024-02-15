const ENDPOINT = "http://localhost:8000/api/auth";
export const userLogin = async (userCredentials) =>
  await fetch(`${ENDPOINT}/logIn`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userCredentials),
  });
