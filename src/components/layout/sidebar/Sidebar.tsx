// react
import { useEffect, useRef, useState } from "react";

// components
import ToggleSidebarBtn from "./ToggleSidebarBtn";

// icons
import SidebarItem from "./SidebarItem";

const TOGGLE_BTN_OUTER_OFFSET = 10;
const SIDEBAR_BORDER_WIDTH = 3;

const Sidebar = () => {
  const isMobile = innerWidth <= 500;

  console.log(!isMobile);

  const [open, setOpen] = useState(!isMobile);

  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;

    if (sidebar) {
      const watcher = new ResizeObserver(() => {
        const isMobile = innerWidth <= 500;

        if (!open && !isMobile) {
          sidebar.style.marginRight = `${-sidebar.offsetWidth}px`;
        } else sidebar.style.removeProperty("margin-right");

        if (open) {
          sidebar.style.translate = `0 0`;
        } else
          sidebar.style.translate = `calc(-100% + ${
            !isMobile ? SIDEBAR_BORDER_WIDTH : "0"
          }px) 0`;
      });

      watcher.observe(sidebar);

      return () => {
        watcher.disconnect();
      };
    }
  }, [open]);

  return (
    <aside
      id="app-sidebar"
      className={`max-[500px]:fixed bg-white max-[500px]:min-h-screen max-[500px]:w-full max-[500px]:border-0 border-r-${SIDEBAR_BORDER_WIDTH} border-r-red-400 relative`}
      style={{
        // translate: open
        //   ? "0 0"
        //   : `calc(-100% + ${isMobile ? SIDEBAR_BORDER_WIDTH : "0"}px) 0`,
        // marginRight:
        //   !open && isMobile ? `-${sidebarRef.current?.offsetWidth || 0}px` : 0,
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

      <ul className="p-2 space-y-2">
        <SidebarItem text="All todos" to="/" />
        <SidebarItem text="Create a new todo" to="/todo-form" />
      </ul>
    </aside>
  );
};
export default Sidebar;
