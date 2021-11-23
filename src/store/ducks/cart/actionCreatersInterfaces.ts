import { Action } from "redux";
import { Cart, CartState, LoadingState } from "./state";

export enum CartActionsType {

  SET_LOADING_STATE = "cart/LOADING_STATE",
  FETCH_CART = "Cart/FETCH_CART",
  SET_CART = "Cart/SET_CART",
  ADD_CART = "Cart/ADD_CART",
  REMOVE_CART = "Cart/REMOVE_CART",
}

export interface FetchCartActionInterface
  extends Action<CartActionsType> {
  type: CartActionsType.FETCH_CART;
}

export interface SetCartActionInterface extends Action<CartActionsType> {
  type: CartActionsType.SET_CART;
  payload: CartState["cart"];
}

export interface SetCartLoadingStateActionInterface
  extends Action<CartActionsType> {
  type: CartActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface AddCartActionInterface
  extends Action<CartActionsType> {
  type: CartActionsType.ADD_CART;
  payload: Cart;
}

export interface RemoveCartActionInterface
  extends Action<CartActionsType> {
  type: CartActionsType.REMOVE_CART;
  payload: string;
}


export type CartActions =
  | FetchCartActionInterface
  | SetCartActionInterface
  | AddCartActionInterface
  | SetCartLoadingStateActionInterface
  | RemoveCartActionInterface

