import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { deleteUser } from "../features/UserReducer";

export const HomeView = () => {
  // explain state  how why for ever feature same or differ ?
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  // console.log(users);

  const handleDelete = (id) => {
    // why not use prevert
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">CRUD APP</h1>
        <Link
          to={"./create"}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
        >
          Create +
        </Link>
      </div>

      {/* Headers */}
      <div className="hidden sm:flex font-semibold border-b py-2">
        <div className="w-1/12"></div>
        <div className="w-3/12"></div>
        <div className="w-4/12"></div>
        <div className="w-4/12"></div>
      </div>

      {/* User Rows */}
      {users.map((user) => (
        <div
          key={user.id}
          className="flex flex-col sm:flex-row items-start sm:items-center border-b py-2 text-sm sm:text-base"
        >
          <div className="w-full sm:w-1/12">{user.id}</div>
          <div className="w-full sm:w-3/12">{user.name}</div>
          <div className="w-full sm:w-4/12">{user.email}</div>
          <div className="w-full sm:w-4/12 flex gap-2 mt-2 sm:mt-0">
            <Link
              to={`/edit/${user.id}`}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(user.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
