import React from "react";
import { useState } from "react";
import { addUser } from "../features/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Links } from "react-router";
export const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users);
  const dispatchUser = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ name, email });
    dispatchUser(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-600 p-8 rounded-lg w-full max-w-md"
      >
        <h2 className="text-white text-2xl font-semibold mb-6">Add New User</h2>

        <div className="mb-4">
          <label className="block text-white mb-1">Name:</label>
          <input
            placeholder="Enter your name here"
            type="text"
            className="w-full px-4 py-2 text-white rounded outline focus:outline-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-white mb-1">Email:</label>
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full px-4 py-2 rounded outline focus:outline-white text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Add User
        </button>
      </form>
    </div>
  );
};
