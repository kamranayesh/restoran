import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import "./root.css";
const Root = () => {
  return (
    <div className="root">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
