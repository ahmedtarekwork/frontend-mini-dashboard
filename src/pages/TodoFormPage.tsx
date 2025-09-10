// react
import { useEffect, useRef } from "react";

// react router
import { useSearchParams } from "react-router";

// components
import PageTitle from "../components/ui/PageTitle";
import InputHolder from "../components/ui/InputHolder";
import FormBtnsHolder from "../components/ui/FormBtnsHolder";

// hooks
import useSubmitTodoForm from "../hooks/TodoForm/useSubmitTodoForm";

const TodoFormPage = () => {
  const [searchParams] = useSearchParams();

  const todoId = searchParams.get("todoId");
  const oldTitle = searchParams.get("title") || "";
  const oldCompletedStatus = JSON.parse(
    searchParams.get("completed") || "false"
  );

  const isEditMode = !!todoId;

  const formRef = useRef<HTMLFormElement>(null);

  const handleReset = () => {
    const form = formRef.current;

    if (!form) return;

    const titleInput = form["todo-title"];
    const completedInput = form["todo-completed"];

    if (titleInput) titleInput.value = oldTitle;
    if (completedInput) completedInput.checked = oldCompletedStatus;
  };

  const { handler, loading } = useSubmitTodoForm(
    isEditMode ? "edit" : "create"
  );

  useEffect(() => {
    if (!isEditMode) formRef.current?.reset();
  }, [searchParams]);

  return (
    <div className="flex flex-col h-full">
      <PageTitle>{isEditMode ? "Edit Todo" : "Create New Todo"}</PageTitle>

      <form
        ref={formRef}
        className="mt-3 flex flex-col gap-4 h-full"
        onSubmit={handler}
      >
        {isEditMode && (
          <p className="font-bold">
            <span>Todo ID:</span> <span className="text-red-500">{todoId}</span>
          </p>
        )}

        <InputHolder
          type="text"
          id="todo-title"
          name="todo-title"
          disabled={loading}
          defaultValue={oldTitle || ""}
        >
          Todo Title:
        </InputHolder>

        <InputHolder
          disabled={loading}
          type="checkbox"
          id="todo-completed"
          name="todo-completed"
          defaultChecked={!!oldCompletedStatus}
        >
          Todo Completed:
        </InputHolder>

        <FormBtnsHolder loading={loading} customReset={handleReset} />
      </form>
    </div>
  );
};
export default TodoFormPage;
