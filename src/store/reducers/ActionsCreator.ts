import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUsers";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const fetchUsers = () => async (dispatch: AppDispatch) => {
//   const { userFetching, userFetchingError, userFetchingSuccess } =
//     userSlice.actions;
//   try {
//     dispatch(userFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userFetchingSuccess(response.data));
//   } catch (e: any) {
//     dispatch(userFetchingError(e.message));
//   }
// };

export const fetchUsers = createAsyncThunk<IUser[], void>(
  "users/fetchUsers",
  async () => {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);
