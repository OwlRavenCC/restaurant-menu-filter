import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

const catFilters = ["all", ...new Set(data.map((filter) => filter.category))];

const App = () => {
  const [menuData, setMenuData] = useState(data);

  const filterMenu = (menuCategory) => {
    if (menuCategory === "all") {
      setMenuData(data);
      return;
    }

    const filteredMenuItems = data.filter(
      (item) => item.category === menuCategory
    );
    setMenuData(filteredMenuItems);
  };

  return (
    <main>
      <section>
        <h1 className="title">Restaurant Menu</h1>
        <div className="title-line"></div>
        <Categories
          catFilters={catFilters}
          filterMenu={filterMenu}
        ></Categories>
        <Menu menuData={menuData}></Menu>
      </section>
    </main>
  );
};

export default App;
