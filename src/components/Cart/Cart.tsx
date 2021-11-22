import React from "react";
import cart__img__empty from "../../images/box.png";
import "./style/Cart.scss";

interface CartProps {
  cartBodyRef: React.RefObject<HTMLDivElement>;
  setShowCart:  React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart:React.FC<CartProps> = ({ cartBodyRef, setShowCart }: CartProps) => {

  const handleShowCart = () =>{
    setShowCart(false)
  }

  return (
    <div className="cart">
      <div className="cart__layout">
        <div ref={cartBodyRef} className="cart__body">
          <h2 className="cart__title">Cart</h2>
          <div className="cart__offer offer-cart">
            <img className="offer-cart__img" src={cart__img__empty} alt="box" />
            <div className="offer-cart__text">
              <h3 className="offer-cart__title">Cart is empty</h3>
              <h3 className="offer-cart__main">
                Add something to create an order
              </h3>
            </div>
            <div className="offer-cart__button _icon-arrow-left" onClick={()=>handleShowCart()}>Go back</div>
          </div>
        </div>
      </div>
    </div>
  );
};
