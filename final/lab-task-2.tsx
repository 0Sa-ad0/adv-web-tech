/*
Implement AXIOS instance for your User Category in NextJs 14 Frontend.
User Category 1:
Create search / view all user / product option.
***User Category 2:
Create add / registration product / user option.
User Category 3:
Create Sign Up option.
User Category 4:
Create delete product / user option.
*/

"use client"

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [submittedUser, setSubmittedUser] = useState<any>(null);

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((response) => {
        console.log(response);
        setSubmittedUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Enter name"
            value={user.name}
            onChange={handleUserInput}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleUserInput}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-stone-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add User
          </button>
        </div>
      </form>
      {submittedUser && (
        <div className="bg-yellow-400 text-zinc-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg font-bold mb-4">Submitted User</h2>
          <p>Name: {submittedUser.name}</p>
          <p>Email: {submittedUser.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
