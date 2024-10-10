import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUsers";
import { fetchUsers } from "./ActionsCreator";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.isLoading = false;
          state.error = "";
          state.users = action.payload;
        }
      )
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Неизвестная ошибка";
      });
  },
});

export default userSlice.reducer;
