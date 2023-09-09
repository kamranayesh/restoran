import menuItems from "../menu.json";
import MenuCard from "./MenuCard";
import "./MenuCard.css";
const Menu = () => {
  // console.log(menuItems);
  return (
    <div className="menu-container">
      {menuItems.map((val, index) => {
        return <MenuCard obj={val} />;
      })}
    </div>
  );
};

export default Menu;
