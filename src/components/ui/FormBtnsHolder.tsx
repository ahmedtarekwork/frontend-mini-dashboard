// react
import type { MouseEventHandler } from "react";

type Props = {
  customReset?: () => void;
  loading: boolean;
};

const FormBtnsHolder = ({ loading, customReset }: Props) => {
  const handleReset: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (customReset) {
      e.preventDefault();
      customReset();
    }
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
export default FormBtnsHolder;
