import React, { createRef, useCallback, useEffect, useState } from "react";
import "./style/Header.scss";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/ducks/cart/selectors";
import { fetchCart } from "../../store/ducks/cart/actionCreaters";

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [sum, setSum] = useState<number>(0);
  const cartBodyRef = createRef<HTMLDivElement>();
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  const handleOpenCart = () => {
    setShowCart(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | null): void => {
      //@ts-ignore
      if (cartBodyRef.current && !cartBodyRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    document.addEventListener("mousedown", (e: MouseEvent) =>
      handleClickOutside(e)
    );
  }, [cartBodyRef]);

  
  const countSum = useCallback(() => {
    let sum = 0;
    for (let item of cart) {
      sum += item.price;
    }
    setSum(sum);
  }, [cart]);

  useEffect(() => {
    countSum();
  }, [countSum]);

  useEffect(()=>{
    dispatch(fetchCart())
  }, [dispatch])

  return (
    <>
      <div className="header">
        <div className="header__navbar">
          <div className="header__logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="header__main main-header">
            <h1 className="main-header__title">Sneakers</h1>
            <div className="main-header__text">Shop of the best shoes</div>
          </div>
          <div className="header__actions actions-header">
            <div className="actions-header__cart cart-header">
              <div
                onClick={() => handleOpenCart()}
                className="cart-header__icon _icon-cart-icon header-icon"
              ></div>
              <div className="cart-header__text">{sum} $</div>
            </div>
            <NavLink to="/favorites">
              <div className="actions-header__favorite _icon-favorite-icon header-icon"></div>
            </NavLink>
            <NavLink to="/orders">
              <div className="actions-header__saved _icon-profile-icon header-icon"></div>
            </NavLink>
          </div>
        </div>
      </div>
      {showCart && <Cart cartBodyRef={cartBodyRef} setShowCart={setShowCart} />}
    </>
  );
};
