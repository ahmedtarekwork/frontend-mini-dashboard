// react
import { useEffect, useState } from "react";

// hooks
import useGetTodos from "../hooks/useGetTodos";

// components
import DisplayTodos from "../components/DisplayTodos";
import Pagination from "../components/Pagination";
import PageTitle from "../components/ui/PageTitle";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const { fetchTodos, error, loading, todos } = useGetTodos();

  useEffect(() => {
    (async () => await fetchTodos(page))();
  }, [page]);

  return (
    <div className="h-full flex flex-col gap-4">
      <PageTitle>Mini Dashboard System</PageTitle>

      <DisplayTodos error={error} loading={loading} todos={todos} page={page} />
      <Pagination
        hidden={!!error || loading}
        setPage={setPage}
        currentPage={page}
      />
    </div>
  );
};
export default HomePage;
