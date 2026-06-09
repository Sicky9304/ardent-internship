import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import LoginSignUp from './components/loginSignUp/LoginSignUp';
import ErrorPage from "./pages/error/ErrorPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
        {
          path:"/login",
          element:<LoginSignUp/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
