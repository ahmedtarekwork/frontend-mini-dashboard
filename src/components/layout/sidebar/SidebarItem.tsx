// react router
import { NavLink } from "react-router";

// icons
import chevron from "../../../assets/icons/chevron.svg";

const SidebarItem = ({ text, to }: Record<"text" | "to", string>) => {
  return (
    <li>
      <NavLink className="button transition" to={to}>
        <span className="transition inline-block">
          <img src={chevron} alt="chevron-icon" className="size-3.5" />
        </span>
        <span>{text}</span>
      </NavLink>
    </li>
  );
};
export default SidebarItem;
