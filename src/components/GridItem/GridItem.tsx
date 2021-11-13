import React from "react";
import "./style/GridItem.scss";
import grid_item_01 from "../../images/grid_item_01.jpg";

export const GridItem = () => {
  return (
    <div className="item">
      <header className="item__header header__item">
        <img src={grid_item_01} alt="01" />
        <button type="button" className="_icon-favorite-icon"></button>
      </header>
      <div className="item__main">Мужские Кроссовки Nike Blazer Mid Suede</div>
      <footer className="item__footer footer-item">
        <div className="footer-item__content">
          <div className="footer-item__title">Цена:</div>
          <div className="footer-item__text">12 999 руб.</div>
        </div>
        <button type="button" className="footer-item__button _icon-plus-icon"></button>
      </footer>
    </div>
  );
};
