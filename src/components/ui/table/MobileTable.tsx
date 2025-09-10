// components
import Badge from "../Badge";
import TodoCellBtnsHolder from "./TodoCellBtnsHolder";

// types
import type { TableProps } from "./Table";

const MobileTable = ({ todos, page }: TableProps) => {
  return (
    <div className="min-[810px]:hidden">
      {todos.map((todo) => {
        const { completed, id, title, userId } = todo;

        return (
          <div
            key={id}
            className="group border-b border-red-700 last:border-0 p-4 hover:bg-red-200 even:bg-red-50 transition-colors duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium px-2 py-1 rounded">
                  ID: {id}
                </span>
                <Badge completed={completed} />
              </div>
              <span className="text-xs">User {userId}</span>
            </div>

            <p
              className={`${
                completed ? "completed-todo-text" : ""
              } transition text-sm mb-3 line-clamp-2 font-bold`.trim()}
            >
              {title}
            </p>

            <TodoCellBtnsHolder page={page} {...todo} />
          </div>
        );
      })}
    </div>
  );
};
export default MobileTable;
