import { Cart } from "../cart/state";
import {
  AddOrdersActionInterface,
  FetchOrdersActionInterface,
  OrdersActionsType,
  RemoveOrdersActionInterface,
  SetOrdersActionInterface,
  SetOrdersLoadingStateActionInterface,
} from "./actionCreatersInterfaces";
import { OrdersState, LoadingState } from "./state";

export const fetchOrders = (): FetchOrdersActionInterface => ({
  type: OrdersActionsType.FETCH_ORDERS,
});

export const setOrders = (
  payload: OrdersState["orders"]
): SetOrdersActionInterface => ({
  type: OrdersActionsType.SET_ORDERS,
  payload,
});

export const setLoadingStateOrders = (
  payload: LoadingState
): SetOrdersLoadingStateActionInterface => ({
  type: OrdersActionsType.SET_LOADING_STATE,
  payload,
});

export const addOrders = (payload: Cart[]): AddOrdersActionInterface => ({
  type: OrdersActionsType.ADD_ORDERS,
  payload,
});

export const removeOrders = (
  payload: string
): RemoveOrdersActionInterface => ({
  type: OrdersActionsType.REMOVE_ORDERS,
  payload,
});
