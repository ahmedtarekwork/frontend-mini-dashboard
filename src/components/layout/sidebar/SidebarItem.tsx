// react
import type { Dispatch, SetStateAction } from "react";

// react router
import { NavLink, useLocation, useSearchParams } from "react-router";

// icons
import chevron from "../../../assets/icons/chevron.svg";

type Props = Record<"text" | "to", string> & {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SidebarItem = ({ text, to, setOpen }: Props) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const isEditTodoFormPage =
    pathname === "/todo-form" && searchParams.get("todoId");

  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          const addActiveClassName = isActive && !isEditTodoFormPage;

          return `button transition ${
            addActiveClassName ? "active" : ""
          }`.trim();
        }}
        to={to}
        onClick={() => {
          if (innerWidth <= 500) setOpen(false);
        }}
      >
        <span className="transition inline-block">
          <img src={chevron} alt="chevron-icon" className="size-3.5" />
        </span>
        <span>{text}</span>
      </NavLink>
    </li>
  );
};
export default SidebarItem;
