// react
import { useState, type FormEvent } from "react";

// toast notifications
import { toast } from "sonner";

// redux
import useDispatch from "./redux/useDispatch";
// actions
import { setUser } from "../store/features/authSlice";

const defaultErrorMsg = "can't login you at the momment, try again later";

const checkValidValues = ({
  email,
  password,
}: Record<"email" | "password", string>) => {
  const validateEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isEmptyInput = [
    { name: "email", value: email },
    { name: "password", value: password },
  ].find((val) => !val.value);

  if (isEmptyInput) {
    return `${isEmptyInput.name} is required`;
  }

  if (!validateEmailRegex.test(email)) return "please enter a valid email";
};

const useHandleLoginForm = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const email = form.email.value;
    const password = form.password.value;

    const userInfo = { email, password };

    const isNotValidMsg = checkValidValues(userInfo);

    if (isNotValidMsg) return toast.error(isNotValidMsg);

    try {
      setLoading(true);

      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "x-api-key": "reqres-free-v1",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if ("error" in data) return toast.error(data.error || defaultErrorMsg);
      if (!("token" in data)) return toast.error(defaultErrorMsg);

      localStorage.setItem("token", data.token);

      dispatch(setUser(userInfo));

      toast.success("successfully loged in");
    } catch (error: any) {
      toast.error(error?.error || defaultErrorMsg);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleSubmit };
};

export default useHandleLoginForm;
