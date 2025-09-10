// react router
import { NavLink } from "react-router";

// redux
import useDispatch from "../../../hooks/redux/useDispatch";

// actions
import { editTodo } from "../../../store/features/todosSlice";

// types
import type { TodoCellProps } from "./TodoCell";

// icons
import pendingIconSVG from "../../../assets/icons/pend.svg";
import checkIconSVG from "../../../assets/icons/check-mark.svg";
import editIconSVG from "../../../assets/icons/edit.svg";

const TodoCellBtnsHolder = ({ page, completed, id, title }: TodoCellProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      editTodo({
        page,
        newTodoData: { completed: !completed },
        todoId: id,
      })
    );
  };

  const reversedStatus = completed ? "Pend" : "Complete";

  const statusBtnColor = completed
    ? "bg-yellow-600 hover:bg-yellow-700"
    : "bg-green-600 hover:bg-green-700";

  return (
    <div className="flex flex-wrap gap-2 [&>*]:px-4 [&>*]:flex-1">
      <NavLink
        onClick={(e) => e.stopPropagation()}
        className="button text-center"
        to={`/todo-form?todoId=${id}&completed=${completed}&title=${title}&page=${page}`}
      >
        <img
          className="mx-auto mb-1 size-5"
          src={editIconSVG}
          alt="edit icon"
        />
        Edit
      </NavLink>

      <button
        title={`${reversedStatus} todo status`}
        className={`button ${statusBtnColor}`}
        onClick={handleClick}
      >
        <img
          className="mx-auto mb-1 size-5"
          src={completed ? pendingIconSVG : checkIconSVG}
          alt={`${reversedStatus} icon`}
        />
        {reversedStatus}
      </button>
    </div>
  );
};
export default TodoCellBtnsHolder;
