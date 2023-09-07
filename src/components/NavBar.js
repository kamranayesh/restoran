import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <h1 className="restoran-icon">
        <FontAwesomeIcon icon="fa-solid fa-utensils" />
        Restoran
      </h1>
      <Link className="nav-bar-btn" to="/home">
        Home
      </Link>
      <Link className="nav-bar-btn" to="/about">
        About
      </Link>
      <Link className="nav-bar-btn" to="/service">
        Service
      </Link>
      <Link className="nav-bar-btn" to="/menu">
        Menu
      </Link>
      <Link className="nav-bar-btn" to="/cart">
        Cart
      </Link>
      <Link className="nav-bar-btn" to="/contact">
        Contact
      </Link>
      <Link className="book-table-btn" to="/bookatable">
        Book A Table
      </Link>
    </div>
  );
};

export default NavBar;
