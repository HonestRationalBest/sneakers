import { Action } from "redux";
import { Cart } from "../cart/state";
import { OrdersState, LoadingState } from "./state";

export enum OrdersActionsType {
  FETCH_ORDERS = "orders/FETCH_ORDERS",
  SET_ORDERS = "orders/SET_ORDERS",
  SET_LOADING_STATE = "orders/LOADING_STATE",
  ADD_ORDERS = "orders/ADD_ORDERS",
  REMOVE_ORDERS = "orders/REMOVE_ORDERS",
}

export interface FetchOrdersActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.FETCH_ORDERS;
}

export interface SetOrdersActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.SET_ORDERS;
  payload: OrdersState["orders"];
}

export interface SetOrdersLoadingStateActionInterface
  extends Action<OrdersActionsType> {
  type: OrdersActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface AddOrdersActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.ADD_ORDERS;
  payload: Cart[];
}

export interface RemoveOrdersActionInterface extends Action<OrdersActionsType> {
  type: OrdersActionsType.REMOVE_ORDERS;
  payload: string;
}

export type OrdersActions =
  | FetchOrdersActionInterface
  | SetOrdersActionInterface
  | AddOrdersActionInterface
  | RemoveOrdersActionInterface
  | SetOrdersLoadingStateActionInterface;
