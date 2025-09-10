// react
import { useRef } from "react";

// components
import ToggleSidebarBtn from "./ToggleSidebarBtn";
import LogoutBtn from "./LogoutBtn";

// icons
import SidebarItem from "./SidebarItem";

// hooks
import useToggleSidebar from "../../../hooks/useToggleSidebar";

const sidebarItems = [
  { text: "All todos", to: "/", id: 1 },
  { text: "Create a new todo", to: "/todo-form", id: 2 },
];

const Sidebar = () => {
  const TOGGLE_BTN_OUTER_OFFSET = 10;
  const SIDEBAR_BORDER_WIDTH = 3;

  const sidebarRef = useRef<HTMLElement>(null);

  const { open, setOpen } = useToggleSidebar({
    sidebarRef,
    SIDEBAR_BORDER_WIDTH,
  });

  return (
    <aside
      id="app-sidebar"
      className={`sticky min-h-screen h-screen min-[501px]:top-0 min-[501px]:left-0 max-[500px]:fixed z-50 bg-white max-[500px]:w-full`}
      style={{
        transition: "0.3s",
      }}
      ref={sidebarRef}
    >
      <ToggleSidebarBtn
        open={open}
        setOpen={setOpen}
        SIDEBAR_BORDER_WIDTH={SIDEBAR_BORDER_WIDTH}
        TOGGLE_BTN_OUTER_OFFSET={TOGGLE_BTN_OUTER_OFFSET}
      />

      <ul
        className={`p-4 h-full flex flex-col gap-2 max-[500px]:border-0 border-r-red-400`}
        style={{
          borderRightWidth: SIDEBAR_BORDER_WIDTH,
          borderRightStyle: "solid",
        }}
      >
        {sidebarItems.map(({ id, ...item }) => (
          <SidebarItem key={id} setOpen={setOpen} {...item} />
        ))}
        <LogoutBtn />
      </ul>
    </aside>
  );
};
export default Sidebar;
