import React from "react";
import "./style/Orders.scss";
import smile from "../../images/orders_smile.png";
import { NavLink } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <img src={smile} alt="smile" className="orders__img" />
      <div className="orders__title">You don't have any orders</div>
      <div className="orders__text">Are you poor?</div>
      <div className="orders__text">Order some sneakers</div>
      <NavLink to="/">
        <button type="button" className="orders__button _icon-arrow-left">
          Return
        </button>
      </NavLink>
    </div>
  );
};

export default Orders;
