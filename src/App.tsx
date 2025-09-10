import "./App.css";

// react router
import AppRouter from "./components/layout/AppRouter";

// redux
import { Provider } from "react-redux";
import { store } from "./store/store";

// toast notifications
import { Toaster } from "sonner";

function App() {
  return (
    <Provider store={store}>
      <Toaster richColors position="top-right" closeButton duration={6000} />
      <AppRouter />
    </Provider>
  );
}

export default App;
