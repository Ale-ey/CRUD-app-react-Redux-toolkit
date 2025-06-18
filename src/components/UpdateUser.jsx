import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "../features/UserReducer";

export const UpdateUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const existingUser = users.filter((f) => f.id == id);

  const { name, email } = existingUser[0];

  const [u_name, setu_name] = useState(name);
  const [u_email, setu_email] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: id, name: u_name, email: u_email }));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form
        className="bg-gray-600 p-8 rounded-lg w-full max-w-md"
        onSubmit={handleUpdate}
      >
        <h2 className="text-white text-2xl font-semibold mb-6">Update User</h2>

        <div className="mb-4">
          <label className="block text-white mb-1">Name:</label>
          <input
            placeholder="Enter your name here"
            type="text"
            className="w-full px-4 py-2 text-white rounded outline focus:outline-white"
            value={u_name}
            onChange={(e) => setu_name(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-white mb-1">Email:</label>
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full px-4 py-2 rounded outline focus:outline-white text-white"
            value={u_email}
            onChange={(e) => setu_email(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Update
        </button>
      </form>
    </div>
  );
};
