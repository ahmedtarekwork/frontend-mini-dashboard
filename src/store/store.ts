import { configureStore } from "@reduxjs/toolkit";

// reducers
import todos from "./features/todosSlice";

export const store = configureStore({
  reducer: {
    todos,
  },
});
