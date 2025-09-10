// react
import {
  useRef,

  // types
  type ComponentProps,
  type KeyboardEvent,
  type ReactNode,
  type Ref,
  type RefObject,
} from "react";

// icons
import checkMark from "../../assets/icons/check-mark.svg";

type Props = {
  ref?: Ref<HTMLInputElement>;
  children: ReactNode;
  sameSize?: boolean;
} & ComponentProps<"input">;

const InputHolder = ({ sameSize, ref, children, ...attr }: Props) => {
  const isCheckboxOrRadio = ["checkbox", "radio"].includes(attr.type || "");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();

      const input = ref
        ? (ref as RefObject<HTMLInputElement>).current
        : inputRef.current;

      input?.click();
    }
  };

  return (
    <div className="flex gap-2 flex-wrap">
      <label
        htmlFor={attr.id}
        className={`${
          sameSize ? "flex-[0.15] " : ""
        }font-bold flex gap-2 items-center`}
      >
        {children}
        {isCheckboxOrRadio && (
          <>
            <span
              onKeyDown={handleKeyDown}
              tabIndex={0}
              className="label-box grid place-content-center"
            >
              <img src={checkMark} alt="check mark" className="size-5" />
            </span>
            <input
              ref={ref || inputRef}
              {...attr}
              className={attr.className || ""}
            />
          </>
        )}
      </label>

      {!isCheckboxOrRadio && (
        <input
          ref={ref}
          {...attr}
          className={`flex-1 ${attr.className || ""}`.trim()}
        />
      )}
    </div>
  );
};
export default InputHolder;
