import React from "react";
import "./style/Header.scss";
import logo from "../../images/logo.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__navbar">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__main main-header">
          <h1 className="main-header__title">Sneakers</h1>
          <div className="main-header__text">Shop of the best shoes</div>
        </div>
        <div className="header__actions actions-header">
          <div className="actions-header__cart cart-header">
            <div className="cart-header__icon _icon-cart-icon header-icon"></div>
            <div className="cart-header__text">123 $</div>
          </div>
          <div className="actions-header__favorite _icon-favorite-icon header-icon"></div>
          <div className="actions-header__saved _icon-profile-icon header-icon"></div>
        </div>
      </div>
    </div>
  );
};
