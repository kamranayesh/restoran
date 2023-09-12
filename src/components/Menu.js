import menuItems from "../menu.json";
import MenuCard from "./MenuCard";
import "./MenuCard.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const Menu = () => {
  // console.log(menuItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filter, setFilter] = useState("all");

  const filterAndSortMenu = () => {
    let filteredMenu = menuItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter !== "all") {
      filteredMenu = filteredMenu.filter((item) => item.type === filter);
    }

    switch (sortBy) {
      case "lowToHigh":
        filteredMenu.sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        filteredMenu.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filteredMenu.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filteredMenu;
  };
  return (
    <div className="menu-root">
      <div className="menu-function">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="menu-search"
        />
        <Select
          value={sortBy}
          label="SORT"
          className="menu-select"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <MenuItem value="default">Sort by</MenuItem>
          <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
          <MenuItem value="highToLow">Price: High to Low</MenuItem>
          <MenuItem value="name">Name</MenuItem>
        </Select>

        <Select
          value={filter}
          label="FILTER"
          className="menu-filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="veg">Veg</MenuItem>
          <MenuItem value="nonveg">Non-Veg</MenuItem>
        </Select>
      </div>
      <div className="menu-container">
        {filterAndSortMenu().map((val, index) => {
          return <MenuCard obj={val} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
