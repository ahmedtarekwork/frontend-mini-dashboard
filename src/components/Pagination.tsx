// react
import type { Dispatch, SetStateAction } from "react";

// constants
import {
  TODOS_PER_PAGE,
  TOTAL_TODOS_COLLECTION_COUNT,
} from "../common/constants";

type Props = {
  setPage: Dispatch<SetStateAction<number>>;
  hidden: boolean;
  currentPage: number;
};

const Pagination = ({ setPage, hidden, currentPage }: Props) => {
  if (hidden) return;

  const handleChnagePage = (newPage: number) => {
    if (newPage === currentPage) return;

    setPage(newPage);
  };

  return (
    <ul className="w-full border-2 border-red-400 p-3 rounded-lg mt-auto mx-auto mb-4 flex flex-wrap gap-x-2 gap-y-4 max-w-screen overflow-auto">
      {Array.from({
        length: TOTAL_TODOS_COLLECTION_COUNT / TODOS_PER_PAGE,
      }).map((_, i) => {
        const page = i + 1;
        const isCurrentPage = currentPage === page;

        return (
          <li key={(i + 1).toString()} className="flex-1">
            <button
              onClick={() => handleChnagePage(page)}
              disabled={isCurrentPage}
              className={`button size-full px-4 hover::bg-red-400 transition ${
                isCurrentPage ? "bg-red-300 cursor-not-allowed" : ""
              }`.trim()}
              title={`get todos for page No. ${page}`}
            >
              {page}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default Pagination;
