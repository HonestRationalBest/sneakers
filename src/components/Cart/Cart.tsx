import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cart__img__empty from "../../images/box.png";
import {
  selectCart,
  selectIsCartLoading,
} from "../../store/ducks/cart/selectors";
import { CartItem } from "../CartItem/CartItem";
import "./style/Cart.scss";

interface CartProps {
  cartBodyRef: React.RefObject<HTMLDivElement>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart: React.FC<CartProps> = ({
  cartBodyRef,
  setShowCart,
}: CartProps) => {
  const [sum, setSum] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const isLoading = useSelector(selectIsCartLoading);

  const cart = useSelector(selectCart);

  const handleShowCart = () => {
    setShowCart(false);
  };

  const countTax = useCallback(() => {
    setTax(sum - sum * 0.95);
  }, [sum]);

  const countSum = useCallback(() => {
    let sum = 0;
    for (let item of cart) {
      sum += item.price;
    }
    setSum(sum);
  }, [cart]);

  useEffect(() => {
    countSum();
    countTax();
  }, [countSum, countTax]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cart">
      <div className="cart__layout">
        <div ref={cartBodyRef} className="cart__body">
          <div className="cart__container">
            <h2 className="cart__title">Cart</h2>
            {cart.length ? (
              <div className="cart__main">
                <div className="cart__grid">
                  {cart.map((item) => {
                    return <CartItem item={item} />;
                  })}
                </div>
                <div className="cart__summary summary-cart">
                  <div className="summary-cart__text text-summary">
                    <div className="text-summary__text">Summary:</div>
                    <div className="text-summary__dots">
                      .......................................................
                    </div>
                    <div className="text-summary__price">{sum} $</div>
                  </div>
                  <div className="summary-cart__text text-summary">
                    <div className="text-summary__text">Tax 5%:</div>
                    <div className="text-summary__dots">
                      .......................................................
                    </div>
                    <div className="text-summary__price">{tax} $</div>
                  </div>
                  <button
                    type="button"
                    className="summary-cart__button _icon-arrow-left"
                  >
                    Make an order
                  </button>
                </div>
              </div>
            ) : (
              <div className="cart__offer offer-cart">
                <img
                  className="offer-cart__img"
                  src={cart__img__empty}
                  alt="box"
                />
                <div className="offer-cart__text">
                  <h3 className="offer-cart__title">Cart is empty</h3>
                  <h3 className="offer-cart__main">
                    Add something to create an order
                  </h3>
                </div>
                <div
                  className="offer-cart__button _icon-arrow-left"
                  onClick={() => handleShowCart()}
                >
                  Go back
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
