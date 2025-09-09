// types
import type { Todo } from "../utils/types";

// redux
import useDispatch from "../hooks/redux/useDispatch";

// actions
import { editTodo } from "../store/features/todosSlice";
import { NavLink } from "react-router";

type Props = Todo & { page: number };

const TodoCard = ({ title, completed, page, id }: Props) => {
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

  const completedStyle =
    "transition line-through text-red-400 group-hover:text-red-600";

  return (
    <li>
      <button
        onClick={handleClick}
        title="mark todo as completed"
        className="size-full flex flex-col gap-3 min-h-full group border border-red-400 hover:rounded-2xl rounded-md p-4 hover:bg-red-200 font-bold"
        style={{
          transition: "0.3s",
        }}
      >
        {completed && (
          <p className="select-none pointer-events-none mx-auto bg-red-500 shadow-sm shadow-red-800 rounded-full w-fit px-3 py-0.5 font-semibold text-white">
            done
          </p>
        )}

        <p className={`my-auto ${completed ? completedStyle : ""}`}>{title}</p>

        <NavLink className="button" to={`/todo-form?todoId=${id}`}>
          Edit
        </NavLink>
      </button>
    </li>
  );
};
export default TodoCard;
