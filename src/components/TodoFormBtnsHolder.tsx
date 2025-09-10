// react
import type { MouseEventHandler, RefObject } from "react";

type Props = {
  titleInputRef: RefObject<HTMLInputElement | null>;
  completedInputRef: RefObject<HTMLInputElement | null>;
  oldTitle: string;
  oldCompletedStatus: boolean;
  loading: boolean;
  isEditMode: boolean;
};

const TodoFormBtnsHolder = ({
  loading,
  isEditMode,
  completedInputRef,
  oldCompletedStatus,
  oldTitle,
  titleInputRef,
}: Props) => {
  const handleReset: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isEditMode) e.preventDefault();

    const completedInput = completedInputRef.current;
    if (completedInput) completedInput.checked = oldCompletedStatus;

    const titleInput = titleInputRef.current;
    if (titleInput) titleInput.value = oldTitle;
  };

  return (
    <div className="flex gap-4 flex-wrap mt-auto [&>*]:flex-1">
      <button
        className="button bg-green-600 hover:bg-green-700"
        disabled={loading}
      >
        {loading ? (
          <div className="mx-auto rounded-full animate-spin size-6 border-3 borde-white border-b-transparent" />
        ) : (
          "Submit"
        )}
      </button>

      <button
        onClick={handleReset}
        disabled={loading}
        type="reset"
        className="button"
      >
        Reset
      </button>
    </div>
  );
};
export default TodoFormBtnsHolder;
