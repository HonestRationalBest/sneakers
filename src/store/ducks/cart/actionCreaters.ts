import {
  AddCartActionInterface,
  CartActionsType,
  FetchCartActionInterface,
  RemoveCartActionInterface,
  SetCartActionInterface,
  SetCartLoadingStateActionInterface
} from "./actionCreatersInterfaces";
import { Cart, CartState, LoadingState } from "./state";

export const fetchCart = (): FetchCartActionInterface => ({
  type: CartActionsType.FETCH_CART,
});

export const setCart = (
  payload: CartState["cart"]
): SetCartActionInterface => ({
  type: CartActionsType.SET_CART,
  payload,
});

export const addCart = (payload: Cart): AddCartActionInterface => ({
  type: CartActionsType.ADD_CART,
  payload,
});

export const removeCart = (
  payload: string
): RemoveCartActionInterface => ({
  type: CartActionsType.REMOVE_CART,
  payload,
});

export const setLoadingStateCart = (
  payload: LoadingState
): SetCartLoadingStateActionInterface => ({
  type: CartActionsType.SET_LOADING_STATE,
  payload,
});
