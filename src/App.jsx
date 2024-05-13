import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { MyDive } from "./pages/MyDive/MyDive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-dive",
    element: <MyDive />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
