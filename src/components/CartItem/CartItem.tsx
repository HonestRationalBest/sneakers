import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../../store/ducks/cart/actionCreaters";
import { Item } from "../../store/ducks/items/state";
import "./style/CartItem.scss"

interface CartItemProps {
  item: Item;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {

  const dispatch = useDispatch()


  const handleRemoveItem = () =>{
    dispatch(removeCart(item._id))
  }

  return (
    <div className="cart-item">
      <img src={item.picture} alt="item" className="cart-item__img"/>
      <div className="cart-item__main">
        <div className="cart-item__title">{item.title}</div>
        <div className="cart-item__price">{item.price} $</div>
      </div>
      <button type="button" className="cart-item__button _icon-plus-icon" onClick={()=>handleRemoveItem()}></button>
    </div>
  );
};
