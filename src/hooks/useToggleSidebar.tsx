// react
import { useEffect, useState, type RefObject } from "react";

type Props = {
  SIDEBAR_BORDER_WIDTH: number;
  sidebarRef: RefObject<HTMLElement | null>;
};

const useToggleSidebar = ({ SIDEBAR_BORDER_WIDTH, sidebarRef }: Props) => {
  const isMobile = innerWidth <= 500;

  const [open, setOpen] = useState(!isMobile);

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

  return { open, setOpen };
};

export default useToggleSidebar;
