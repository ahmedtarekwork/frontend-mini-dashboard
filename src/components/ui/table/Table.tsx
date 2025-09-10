// components
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";

// types
import type { Todo } from "../../../common/types";

export type TableProps = { todos: Todo[]; page: number };

const Table = ({ todos, page }: TableProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-red-700 shadow-sm">
      <DesktopTable todos={todos} page={page} />
      <MobileTable todos={todos} page={page} />
    </div>
  );
};

export default Table;
