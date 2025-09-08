// react
import type { Dispatch, SetStateAction } from "react";

// icons
import openSidebar from "../../../assets/icons/open-sidebar.svg";
import closeSidebar from "../../../assets/icons/close-sidebar.svg";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  SIDEBAR_BORDER_WIDTH: number;
  TOGGLE_BTN_OUTER_OFFSET: number;
};

const ToggleSidebarBtn = ({
  open,
  setOpen,
  TOGGLE_BTN_OUTER_OFFSET,
  SIDEBAR_BORDER_WIDTH,
}: Props) => {
  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const ANIMATE_TOGGLE_BTN_GAP = TOGGLE_BTN_OUTER_OFFSET - SIDEBAR_BORDER_WIDTH;

  return (
    <button
      className={`button bottom-4 max-[500px]:!right-0 absolute transition`}
      style={{
        translate: open ? "0 0" : `calc(100% - ${ANIMATE_TOGGLE_BTN_GAP}px) 0`,
        right: `${-TOGGLE_BTN_OUTER_OFFSET}px`,
      }}
      onClick={handleToggleSidebar}
    >
      <img
        src={open ? closeSidebar : openSidebar}
        alt="toggle icon"
        className="size-6"
      />
    </button>
  );
};
export default ToggleSidebarBtn;
