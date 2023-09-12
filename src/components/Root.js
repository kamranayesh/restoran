import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import "./root.css";
const Root = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="root">
      <NavBar />
      <Outlet />
      <div className="root-href" onClick={scrollToTop}>
        <i className="root-icon">{"\u2191"}</i>
      </div>
    </div>
  );
};

export default Root;
