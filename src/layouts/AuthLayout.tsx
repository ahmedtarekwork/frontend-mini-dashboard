// react
import { useEffect } from "react";

// react router
import { Navigate, Outlet, useLocation } from "react-router";

// redux
import useDispatch from "../hooks/redux/useDispatch";
import useSelector from "../hooks/redux/useSelector";

// actions
import { setUser } from "../store/features/authSlice";

const AuthLayout = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(
        // mock user info
        setUser({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        })
      );
    }
  }, []);

  if (!user && pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  if (user && pathname === "/login") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
export default AuthLayout;
