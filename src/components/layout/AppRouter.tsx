// react router
import { BrowserRouter, Route, Routes } from "react-router";

// pages
import HomePage from "../../pages/HomePage";
import TodoFormPage from "../../pages/TodoFormPage";
import LoginPage from "../../pages/LoginPage";

// layouts
import MainLayout from "../../layouts/MainLayout";
import AuthLayout from "../../layouts/AuthLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/todo-form" element={<TodoFormPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
