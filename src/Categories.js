import React, { useState } from "react";

const Categories = ({ catFilters, filterMenu }) => {
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <div className="filter-container">
      {catFilters.map((filter, index) => {
        return (
          <button
            key={index}
            className={
              "filter-btn" + (activeFilter === index ? " active-filter" : "")
            }
            onClick={(e) => {
              filterMenu(filter);
              setActiveFilter(index);
            }}
          >
            {filter}
            <div className="underline"></div>
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
