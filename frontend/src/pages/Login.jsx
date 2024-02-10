import { useState } from "react";

function LoginForm() {
  const [phone, setPhone] = useState(""); // Only use email instead of formData
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "phone") {
      setPhone(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with your actual backend API call
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response:", data);
        // Handle successful login (e.g., redirect to dashboard)
      })
      .catch((error) => {
        console.error("Login error:", error);
        // Handle login error (e.g., display error message)
      });
  };

  return (
    <>
     
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 w-full max-w-md mx-auto px-8 py-6 rounded-md shadow-md bg-white"
        >
         <h1 className="text-4xl font-bold">
        Login To Your {" "}
        <span className="bg-red-500 text-white pl-1 pr-1">
           BloodFinder
        </span>{" "}
        Account!
      </h1>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone No:
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
