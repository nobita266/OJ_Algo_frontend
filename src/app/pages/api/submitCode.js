const ENDPOINT = "http://localhost:8000";
export const submitCode = async (payload) =>
  await fetch(`${ENDPOINT}/codeSubmit`, {
    method: "POST",
    headers: {
      authorization: localStorage.getItem("accessToken"), //
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
