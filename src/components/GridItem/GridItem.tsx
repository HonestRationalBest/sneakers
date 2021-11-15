import React from "react";
import { Item } from "../../store/ducks/state";
import "./style/GridItem.scss";

export const GridItem:React.FC<Item> = ({picture, price, title}: Item) => {
  return (
    <div className="item">
      <header className="item__header header__item">
        <img src={picture} alt="01" />
        <button type="button" className="_icon-favorite-icon"></button>
      </header>
      <div className="item__main">{title}</div>
      <footer className="item__footer footer-item">
        <div className="footer-item__content">
          <div className="footer-item__title">Price:</div>
          <div className="footer-item__text">{price} $</div>
        </div>
        <button type="button" className="footer-item__button _icon-plus-icon"></button>
      </footer>
    </div>
  );
};
