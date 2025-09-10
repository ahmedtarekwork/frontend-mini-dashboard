// illustrations
import errorIllustrations from "../assets/illustrations/error.svg";

// components
import Table from "./ui/table/Table";

// types
import type { TodosCell } from "../store/features/todosSlice";

type Props = {
  loading: boolean;
  error: string;
  page: number;
  todos: TodosCell[];
};

const DisplayTodos = ({ error, loading, page, todos }: Props) => {
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-full text-center gap-4">
        <div className="max-[380px]:size-30 size-60 max-w-full aspect-[1] border-4 border-b-transparent border-red-600 rounded-full animate-spin" />
        <p className="text text-2xl">Getting the todos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center flex flex-col items-center justify-center">
        <img
          src={errorIllustrations}
          alt="error illustration"
          className="max-w-full w-[400px] aspect-[1]"
        />
        <p className="text text-2xl">{error}</p>
      </div>
    );
  }

  const currentTodos = todos.find((cell) => cell.page === page)?.todos || [];

  if (!currentTodos.length)
    return <h1 className="text">No Todos to show in this page!</h1>;

  return <Table todos={currentTodos} page={page} />;
};
export default DisplayTodos;
