// types
import type { TableProps } from "./Table";

// components
import TodoCell from "./TodoCell";

const DesktopTable = ({ todos, page }: TableProps) => {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full">
        <thead className="border-b-red-700 border-b bg-red-50">
          <tr className="[&>*]:px-6 [&>*]:py-4 [&>*]:text-left [&>*]:text-sm [&>*]:font-bold [&>*]:text-red-700">
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-border divide-red-700">
          {todos.map((todo) => (
            <TodoCell key={todo.id} {...todo} page={page} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DesktopTable;
