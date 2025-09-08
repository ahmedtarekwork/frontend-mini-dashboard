import { BrowserRouter, Route, Routes } from "react-router";

// pages
import HomePage from "../../pages/HomePage";
import TodoFormPage from "../../pages/TodoFormPage";
import MainLayout from "../../layouts/MainLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/todo-form" element={<TodoFormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
