// react
import type { ReactNode } from "react";

const PageTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-bold text-red-600 text-2xl border-b-2 w-fit">
      {children}
    </h1>
  );
};
export default PageTitle;
