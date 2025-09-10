import { configureStore } from "@reduxjs/toolkit";

// reducers
import todos from "./features/todosSlice";
import auth from "./features/authSlice";

export const store = configureStore({
  reducer: {
    todos,
    auth,
  },
});
