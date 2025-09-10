// react
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

// types
import type { Todo } from "../../../common/types";

type Props = {
  todos: Todo[];
  setFilteredTodos: Dispatch<SetStateAction<Todo[]>>;
  page: number;
};

const TableSearch = ({ todos, setFilteredTodos, page }: Props) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText("");
  }, [page]);

  useEffect(() => {
    setFilteredTodos(
      todos.filter(({ title }) =>
        title.toLowerCase().includes(searchText.toLocaleLowerCase())
      )
    );
  }, [searchText]);

  return (
    <form>
      <input
        type="text"
        name="table-saerch"
        id="table-saerch"
        className="w-full"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
      />
    </form>
  );
};
export default TableSearch;
