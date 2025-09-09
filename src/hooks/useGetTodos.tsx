// react
import { useState } from "react";

// redux
import useSelector from "./redux/useSelector";
import useDispatch from "./redux/useDispatch";

// actions
import { addMoreTodos } from "../store/features/todosSlice";

// types
import type { Todo } from "../utils/types";

// constants
import { TODOS_PER_PAGE } from "../utils/constants";

const useGetTodos = () => {
  // redux
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos.todos);

  // states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTodos = async (page = 1) => {
    if (todos.some((todoCell) => todoCell.page === page)) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${TODOS_PER_PAGE}`
      );

      const data = (await res.json()) as Todo[];

      dispatch(addMoreTodos({ page, todos: data }));

      if (error) setError("");
    } catch (e) {
      setError(
        "Something went wrong while get the todos, Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return { todos, error, loading, fetchTodos };
};

export default useGetTodos;
