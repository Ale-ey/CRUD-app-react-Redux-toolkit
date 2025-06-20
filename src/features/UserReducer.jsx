import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../assets/Data";
import { act } from "react";
import { UpdateUser } from "../components/UpdateUser";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      // console.log(action);
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updatingUser) {
        updatingUser.name = name;
        updatingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const delUser = state.find((user) => user.id == id);
      if (delUser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
