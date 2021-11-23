import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../../store/ducks/cart/actionCreaters";
import { addFavorites, removeFavorites } from "../../store/ducks/favorites/actionCreaters";
import { Item } from "../../store/ducks/items/state";
import "./style/GridItem.scss";

interface GridItemProps{
  isFavoriteDefault?: boolean
  isInCartDefault?: boolean
  item: Item
}

export const GridItem: React.FC<GridItemProps> = ({item, isFavoriteDefault, isInCartDefault} : GridItemProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleChangeFavorites = () => {

    if(isFavorite){
      setIsFavorite(false);
      dispatch(removeFavorites(item._id));
    }else{
      setIsFavorite(true);
      dispatch(addFavorites({ ...item, isFavorite }));
    }
  };

  const handleChangeCart = () =>{

    if(isInCart){
      setIsInCart(false);
      dispatch(removeCart(item._id));
    }else{
      setIsInCart(true);
      dispatch(addCart({ ...item, isInCart }));
    }
  }

  useEffect(()=>{
    setIsFavorite(isFavoriteDefault as boolean)
    setIsInCart(isInCartDefault as boolean)
  }, [isFavoriteDefault, isInCartDefault])

  return (
    <div className="item">
      <header className="item__header header-item">
        <img src={item.picture} alt="01" />
          {isFavorite ? (
            <button
              type="button"
              className="header-item__isFavorite _icon-favorite-full"
              onClick={() => handleChangeFavorites()}
            ></button>
          ) : (
            <button
              type="button"
              className="_icon-favorite-icon"
              onClick={() => handleChangeFavorites()}
            ></button>
          )}
      </header>
      <div className="item__main">{item.title}</div>
      <footer className="item__footer footer-item">
        <div className="footer-item__content">
          <div className="footer-item__title">Price:</div>
          <div className="footer-item__text">{item.price} $</div>
        </div>
        {isInCart ? 
        <button
        type="button"
        className="footer-item__isInCart footer-item__button _icon-done-icon"
        onClick={() => handleChangeCart()}
      ></button>
        :
        <button
          type="button"
          className="footer-item__button _icon-plus-icon"
          onClick={() => handleChangeCart()}
        ></button>
      }
        
      </footer>
    </div>
  );
};
