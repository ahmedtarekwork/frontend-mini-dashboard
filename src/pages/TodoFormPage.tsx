// react
import { useEffect, useRef } from "react";

// react router
import { useSearchParams } from "react-router";

// components
import PageTitle from "../components/ui/PageTitle";
import InputHolder from "../components/ui/InputHolder";
import TodoFormBtnsHolder from "../components/TodoFormBtnsHolder";

// hooks
import useSubmitForm from "../hooks/form/useSubmitForm";

const TodoFormPage = () => {
  const [searchParams] = useSearchParams();

  const todoId = searchParams.get("todoId");
  const oldTitle = searchParams.get("title") || "";
  const oldCompletedStatus = JSON.parse(
    searchParams.get("completed") || "false"
  );

  const isEditMode = !!todoId;

  const formRef = useRef<HTMLFormElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const completedInputRef = useRef<HTMLInputElement>(null);

  const { handler, loading } = useSubmitForm({
    titleInputRef,
    completedInputRef,
    mode: isEditMode ? "edit" : "create",
  });

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
          ref={titleInputRef}
          disabled={loading}
          defaultValue={oldTitle || ""}
        >
          Todo Title:
        </InputHolder>

        <InputHolder
          disabled={loading}
          type="checkbox"
          id="todo-completed"
          ref={completedInputRef}
          defaultChecked={!!oldCompletedStatus}
        >
          Todo Completed:
        </InputHolder>

        <TodoFormBtnsHolder
          titleInputRef={titleInputRef}
          completedInputRef={completedInputRef}
          oldTitle={oldTitle}
          oldCompletedStatus={oldCompletedStatus}
          isEditMode={isEditMode}
          loading={loading}
        />
      </form>
    </div>
  );
};
export default TodoFormPage;
