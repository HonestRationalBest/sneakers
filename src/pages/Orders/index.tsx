import React from "react";
import "./style/Orders.scss";
import smile from "../../images/orders_smile.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOrders } from "../../store/ducks/orders/selectors";
import { Order } from "../../components/Order/Order";

const Orders = () => {
  const orders = useSelector(selectOrders);

  return (
    <>
      {orders.length ? (
        <div className="main-orders">
          <div className="main-orders__container">
            <div className="main-orders__offer">
              <NavLink to="/">
                <button
                  type="button"
                  className="main-orders__button _icon-arrow-icon"
                ></button>
              </NavLink>
              <div className="main-orders__title">Мои покупки</div>
            </div>
            <div className="main-orders__grid">
              {orders.map((item, index) => {
                return (
                  <Order
                    //@ts-ignore
                    items={item}
                    key={item._id}
                    counter={index+1}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Orders;
