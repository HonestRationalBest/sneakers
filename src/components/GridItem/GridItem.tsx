import React from "react";
import { useDispatch } from "react-redux";
import { addFavorites } from "../../store/ducks/items/actionCreaters";
import { Item } from "../../store/ducks/items/state";
import "./style/GridItem.scss";

export const GridItem: React.FC<Item> = ({
  _id,
  picture,
  price,
  title,
}: Item) => {
  const dispatch = useDispatch();

  const handleAddFavorites = () => {
    dispatch(addFavorites({ _id, picture, price, title }));
  };

  return (
    <div className="item">
      <header className="item__header header__item">
        <img src={picture} alt="01" />
        <button
          type="button"
          className="_icon-favorite-icon"
          onClick={() => handleAddFavorites()}
        ></button>
      </header>
      <div className="item__main">{title}</div>
      <footer className="item__footer footer-item">
        <div className="footer-item__content">
          <div className="footer-item__title">Price:</div>
          <div className="footer-item__text">{price} $</div>
        </div>
        <button
          type="button"
          className="footer-item__button _icon-plus-icon"
        ></button>
      </footer>
    </div>
  );
};
