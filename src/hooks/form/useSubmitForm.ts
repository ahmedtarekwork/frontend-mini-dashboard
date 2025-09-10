// react
import type { FormEvent, RefObject } from "react";

// hooks
import useCraetNewTodo from "./useCreateNewTodo";
import useEditTodo from "./useEditTodo";

// toast notifications
import { toast } from "sonner";

type Props = {
  titleInputRef: RefObject<HTMLInputElement | null>;
  completedInputRef: RefObject<HTMLInputElement | null>;
  mode: "edit" | "create";
};

export type FormSubmitModeHookProps = {
  title: string;
  completed: boolean;
};

const useSubmitForm = ({ titleInputRef, completedInputRef, mode }: Props) => {
  const { sendRequest: handleCreateNew, loading: createNewTodoLoading } =
    useCraetNewTodo();

  const { sendRequest: handleEditTodo, loading: editTodoLoading } =
    useEditTodo();

  const loading = createNewTodoLoading || editTodoLoading;
  const method = mode === "edit" ? handleEditTodo : handleCreateNew;

  const handler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = titleInputRef.current?.value || "";
    const completed = !!completedInputRef.current?.checked;

    if (!title) {
      return toast.error("todo should have a title");
    }

    await method({ title, completed });

    (e.target as HTMLFormElement).reset();
  };

  return { handler, loading };
};
export default useSubmitForm;
