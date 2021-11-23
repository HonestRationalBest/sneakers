import produce, { Draft } from "immer";
import { CartActions, CartActionsType } from "./actionCreatersInterfaces";
import { CartState, LoadingState } from "./state";

const initialCartState: CartState = {
  cart: [],
  loadingState: LoadingState.NEVER,
};

export const cartReducer = produce(
  (draft: Draft<CartState>, action: CartActions) => {
    switch (action.type) {
      case CartActionsType.SET_CART:
        draft.cart = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case CartActionsType.FETCH_CART:
        draft.cart = [];
        draft.loadingState = LoadingState.LOADING;
        break;
      case CartActionsType.ADD_CART:
        draft.cart.push(action.payload);
        break;
      case CartActionsType.REMOVE_CART:
        draft.cart = draft.cart.filter((item) => item._id !== action.payload);
        break;
      case CartActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
    }
  },
  initialCartState
);
