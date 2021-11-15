import React from "react";
import "./style/Header.scss";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export const Header:React.FC = () => {
  return (
    <div className="header">
      <div className="header__navbar">
        <div className="header__logo">
          <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
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
          <NavLink to="/favorites"><div className="actions-header__favorite _icon-favorite-icon header-icon"></div></NavLink>
          <NavLink to="/orders"><div className="actions-header__saved _icon-profile-icon header-icon"></div></NavLink>
        </div>
      </div>
    </div>
  );
};
