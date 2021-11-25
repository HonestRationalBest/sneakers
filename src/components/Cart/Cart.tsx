import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cart__img__empty from "../../images/box.png";
import success_order from "../../images/success_order.png";
import { removeCart } from "../../store/ducks/cart/actionCreaters";
import {
  selectCart,
  selectIsCartLoading,
} from "../../store/ducks/cart/selectors";
import { addOrders } from "../../store/ducks/orders/actionCreaters";
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
  const [isSuccessOrder, setIsSuccessOrder] = useState<boolean>(false);
  const isLoading = useSelector(selectIsCartLoading);

  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleAddOrder = () => {
    dispatch(addOrders(cart));
    for (let item of cart) {
      dispatch(removeCart(item._id));
    }
    setIsSuccessOrder(true);
  };

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
                    onClick={() => handleAddOrder()}
                  >
                    Make an order
                  </button>
                </div>
              </div>
            ) : isSuccessOrder ? (
              <div className="order">
                 <img
                  className="order__img"
                  src={success_order}
                  alt="img"
                />
                <div className="order__text">
                  <h3 className="order__title">Order has been created!</h3>
                  <h3 className="order__main">
                  You order #18 will be arrived soon
                  </h3>
                </div>
                <div
                  className="order__button _icon-arrow-left"
                  onClick={() => handleShowCart()}
                >
                  Go back
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
