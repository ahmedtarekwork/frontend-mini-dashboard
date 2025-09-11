// react
import type { FormEvent } from "react";

// hooks
import useCraetNewTodo from "./useCreateNewTodo";
import useEditTodo from "./useEditTodo";

// toast notifications
import { toast } from "sonner";

export type FormSubmitModeHookProps = {
  title: string;
  completed: boolean;
  formEl: HTMLFormElement;
};

const useSubmitTodoForm = (mode: "edit" | "create") => {
  const { sendRequest: handleCreateNew, loading: createNewTodoLoading } =
    useCraetNewTodo();

  const { sendRequest: handleEditTodo, loading: editTodoLoading } =
    useEditTodo();

  const loading = createNewTodoLoading || editTodoLoading;
  const method = mode === "edit" ? handleEditTodo : handleCreateNew;

  const handler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;

    if (!formEl) return toast.error("can't submit the form at the momment");

    const title = formEl["todo-title"].value || "";
    const completed = !!formEl["todo-completed"].checked;

    if (!title) {
      return toast.error("todo should have a title");
    }

    await method({ title, completed, formEl });
  };

  return { handler, loading };
};
export default useSubmitTodoForm;
