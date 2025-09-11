// react
import { useState } from "react";

// toast notifications
import { toast } from "sonner";

// title
import type { FormSubmitModeHookProps } from "./useSubmitTodoForm";

const useCraetNewTodo = () => {
  const [loading, setLoading] = useState(false);

  const sendRequest = async ({
    title,
    completed,
    formEl,
  }: FormSubmitModeHookProps) => {
    const todoInfo = {
      title: title,
      completed,
      userId: 1,
    };

    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(todoInfo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      await res.json();

      toast.success("todo created successfully");

      formEl.reset();
    } catch (error) {
      toast.error(
        "something went wrong while creating the todo, try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  return { sendRequest, loading };
};

export default useCraetNewTodo;
