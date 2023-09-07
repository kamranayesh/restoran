import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import BookATable from "./components/BookATable";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Service /> },
      { path: "menu", element: <Menu /> },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <Contact /> },
      { path: "bookatable", element: <BookATable /> },
    ],
  },
]);

export default router;
