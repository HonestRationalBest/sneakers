import produce, { Draft } from "immer";
import { OrdersActions, OrdersActionsType } from "./actionCreatersInterfaces";
import { OrdersState, LoadingState } from "./state";

const initialOrderState: OrdersState = {
  orders: [],
  loadingState: LoadingState.NEVER,
};

export const ordersReducer = produce(
  (draft: Draft<OrdersState>, action: OrdersActions) => {
    switch (action.type) {
      case OrdersActionsType.SET_ORDERS:
        draft.orders = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case OrdersActionsType.FETCH_ORDERS:
        draft.orders = [];
        draft.loadingState = LoadingState.LOADING;
        break;
      case OrdersActionsType.ADD_ORDERS:
        //@ts-ignore
        draft.orders.push(action.payload);
        break;
      case OrdersActionsType.REMOVE_ORDERS:
        // draft.orders = draft.orders.filter(
        //   (item) => item._id !== action.payload
        // );
        break;
      case OrdersActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
    }
  },
  initialOrderState
);
