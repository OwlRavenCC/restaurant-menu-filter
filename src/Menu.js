import React from "react";

const Menu = ({ menuData }) => {
  return (
    <div className="menu-container">
      {menuData.map(({ id, title, price, img, desc }) => {
        return (
          <article key={id} className="menu-item">
            <div className="item-img-container">
              <div className="item-img-background"></div>
              <img src={img} alt={title}></img>
            </div>
            <div className="content">
              <div className="item-header">
                <h3 className="title">{title}</h3>
                <div className="header-line"></div>
                <span className="price">${price}</span>
              </div>
              <div className="item-des">
                <p>{desc}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
