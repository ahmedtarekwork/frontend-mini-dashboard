// illustrations
import errorIllustrations from "../assets/illustrations/error.svg";

// components
import TodoCard from "./TodoCard";

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

  const currentTodos = todos.find((cell) => cell.page === page);

  if (!currentTodos?.todos.length)
    return <h1 className="text">No Todos to show in this page!</h1>;

  return (
    <ul
      className="grid gap-3 justify-center"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 0.8fr))",
      }}
    >
      {currentTodos.todos.map((todo) => (
        <TodoCard page={page} {...todo} key={todo.id} />
      ))}
    </ul>
  );
};
export default DisplayTodos;
