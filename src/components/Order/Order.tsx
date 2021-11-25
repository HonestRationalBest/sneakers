import React from "react";
import "./style/Order.scss"
import { Cart } from "../../store/ducks/cart/state";
import { GridItem } from "../GridItem/GridItem";

interface OrderProps {
  items: Cart[];
  counter: number;
}

export const Order: React.FC<OrderProps> = ({ items, counter }: OrderProps) => {

  return (
    <div className="one-order">
      <h2 className="one-order__title">Order #{counter}</h2>
      <div className="grid-one-order">
        {items.map((item) => (
          <GridItem item={item} />
        ))}{" "}
      </div>
    </div>
  );
};
