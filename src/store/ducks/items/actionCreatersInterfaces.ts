import { Action } from "redux";
import { Item, ItemsState, LoadingState } from "./state";

export enum ItemsActionsType {
  FETCH_ITEMS = "items/FETCH_ITEMS",
  SET_ITEMS = "items/SET_ITEMS",
  SET_LOADING_STATE = "items/LOADING_STATE",
  FETCH_FAVORITES = "favorites/FETCH_FAVORITES",
  SET_FAVORITES = "favorites/SET_FAVORITES",
  ADD_FAVORITES = "favorites/ADD_FAVORITES",
}

export interface FetchItemsActionInterface extends Action<ItemsActionsType> {
  type: ItemsActionsType.FETCH_ITEMS;
}

export interface SetItemsActionInterface extends Action<ItemsActionsType> {
  type: ItemsActionsType.SET_ITEMS;
  payload: ItemsState["items"];
}

export interface FetchFavoritesActionInterface
  extends Action<ItemsActionsType> {
  type: ItemsActionsType.FETCH_FAVORITES;
}

export interface SetFavoritesActionInterface extends Action<ItemsActionsType> {
  type: ItemsActionsType.SET_FAVORITES;
  payload: ItemsState["items"];
}

export interface SetItemsLoadingStateActionInterface
  extends Action<ItemsActionsType> {
  type: ItemsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}


export interface AddFavoritesActionInterface
  extends Action<ItemsActionsType> {
  type: ItemsActionsType.ADD_FAVORITES;
  payload: Item;
}


export type ItemsActions =
  | FetchItemsActionInterface
  | SetItemsActionInterface
  | FetchFavoritesActionInterface
  | SetFavoritesActionInterface
  | AddFavoritesActionInterface
  | SetItemsLoadingStateActionInterface

