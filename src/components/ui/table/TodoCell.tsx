// components
import Badge from "../Badge";
import TodoCellBtnsHolder from "./TodoCellBtnsHolder";

// types
import type { Todo } from "../../../common/types";

export type TodoCellProps = Todo & { page: number };

const TodoCell = ({ page, ...todo }: TodoCellProps) => {
  const { id, completed, title, userId } = todo;

  return (
    <tr className="[&>*]:px-6 [&>*]:py-4 [&>*]:text-sm even:bg-red-50 group hover:bg-red-200 transition">
      <td>{userId}</td>

      <td className="font-medium">{id}</td>

      <td
        className={`max-w-md font-bold truncate transition ${
          completed ? "completed-todo-text" : ""
        }`.trim()}
      >
        {title}
      </td>

      <td>
        <Badge completed={completed} />
      </td>

      <td>
        <TodoCellBtnsHolder page={page} {...todo} />
      </td>
    </tr>
  );
};
export default TodoCell;
