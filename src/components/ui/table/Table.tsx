// react
import { useEffect, useState } from "react";

// components
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";
import TableSearch from "./TableSearch";

// types
import type { Todo } from "../../../common/types";

// illustrations
import ErrorSVG from "../../../assets/illustrations/error.svg";

export type TableProps = { todos: Todo[]; page: number };

const Table = ({ todos, page }: TableProps) => {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [page]);

  useEffect(() => {
    setFilteredTodos((prev) => {
      const prevIDs = prev.map(({ id }) => id);

      return todos.filter(({ id }) => prevIDs.includes(id));
    });
  }, [todos]);

  return (
    <>
      <TableSearch
        todos={todos}
        page={page}
        setFilteredTodos={setFilteredTodos}
      />

      {!filteredTodos.length && (
        <div className="mx-auto text-center">
          <img
            src={ErrorSVG}
            alt="no result illustration"
            className="w-[500px] aspect-[1] max-w-full"
          />
          <p className="text text-2xl">No Results For Your Search !</p>
        </div>
      )}

      {!!filteredTodos.length && (
        <div className="w-full overflow-hidden rounded-lg border border-red-700 shadow-sm">
          <DesktopTable todos={filteredTodos} page={page} />
          <MobileTable todos={filteredTodos} page={page} />
        </div>
      )}
    </>
  );
};

export default Table;
