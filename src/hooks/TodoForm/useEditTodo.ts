// react
import { useState } from "react";

// react router
import { useNavigate, useSearchParams } from "react-router";

// toast notifications
import { toast } from "sonner";

// types
import type { FormSubmitModeHookProps } from "./useSubmitTodoForm";
import type { Todo } from "../../common/types";

// redux
import useDispatch from "../redux/useDispatch";

// actions
import { editTodo } from "../../store/features/todosSlice";

const useEditTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const todoId = +searchParams.get("todoId")!;
  const oldTitle = searchParams.get("title");
  const oldCompletedStatus = JSON.parse(
    searchParams.get("completed") || "false"
  );
  const page = +searchParams.get("page")!;

  const [loading, setLoading] = useState(false);

  const sendRequest = async ({
    title,
    completed,
    formEl,
  }: FormSubmitModeHookProps) => {
    if (title === oldTitle && oldCompletedStatus === completed) {
      return toast.error("you must change todo info before submiting");
    }

    const newTodoData = {} as Partial<Todo>;

    if (title !== oldTitle) newTodoData.title = title;
    if (completed !== oldCompletedStatus) newTodoData.completed = completed;

    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
          method: "PATCH",
          body: JSON.stringify(newTodoData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      await res.json();

      dispatch(editTodo({ page, todoId, newTodoData }));

      toast.success("todo info updated successfully");

      formEl.reset();

      navigate("/");
    } catch (error) {
      toast.error(
        "something went wrong while updating the todo, try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  return { sendRequest, loading };
};

export default useEditTodo;
