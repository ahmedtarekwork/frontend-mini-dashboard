import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = Record<"email" | "password", string>;

type InitStateType = { user: User | null };

const initialState: InitStateType = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
