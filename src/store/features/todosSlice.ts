import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

// types
import type { Todo } from "../../common/types";

export type TodosCell = { page: number; todos: Todo[] };

type InitStateType = { todos: TodosCell[] };

type EditTodoActionPayload = PayloadAction<{
  page: number;
  todoId: number;
  newTodoData: Partial<Todo>;
}>;

const initialState: InitStateType = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addMoreTodos: (state, { payload }: PayloadAction<TodosCell>) => {
      state.todos.push(payload);
    },
    editTodo: (state, { payload }: EditTodoActionPayload) => {
      const cellIndex = state.todos.findIndex(
        (todoCell) => payload.page === todoCell.page
      );

      if (cellIndex !== -1) {
        state.todos[cellIndex].todos = state.todos[cellIndex].todos.map(
          (todo) =>
            payload.todoId === todo.id
              ? { ...todo, ...payload.newTodoData }
              : todo
        );
      }
    },
  },
});

export const { addMoreTodos, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
