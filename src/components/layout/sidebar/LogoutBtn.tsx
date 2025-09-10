// react
import { useState } from "react";

// toast notifications
import { toast } from "sonner";

// redux
import useDispatch from "../../../hooks/redux/useDispatch";
// actions
import { logout } from "../../../store/features/authSlice";

// icons
import logoutIconSVG from "../../../assets/icons/logout.svg";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    const defaultErrorMsg = "can't logout at the momment";

    setLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/logout", {
        method: "POST",
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });

      if (!res.ok) return toast.error(defaultErrorMsg);

      localStorage.removeItem("token");
      dispatch(logout());
    } catch (error) {
      toast.error(defaultErrorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <li className="mt-auto">
      <button
        disabled={loading}
        className="button w-full flex gap-2 flex-wrap items-center justify-center text-center"
        onClick={handleLogout}
      >
        <img className="size-5" src={logoutIconSVG} alt="logout icon" />
        {loading ? "Loging out..." : "Logout"}
      </button>
    </li>
  );
};
export default LogoutBtn;
