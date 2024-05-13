import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { MyDiveSchool } from "./pages/MyDiveSchool/MyDiveSchool";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-dive-school",
    element: <MyDiveSchool />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
