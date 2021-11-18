import {
  AddFavoritesActionInterface,
  FetchFavoritesActionInterface,
  FetchItemsActionInterface,
  ItemsActionsType,
  SetFavoritesActionInterface,
  SetItemsActionInterface,
  SetItemsLoadingStateActionInterface,
} from "./actionCreatersInterfaces";
import { Item, ItemsState, LoadingState } from "./state";

export const fetchItems = (): FetchItemsActionInterface => ({
  type: ItemsActionsType.FETCH_ITEMS,
});

export const setItems = (
  payload: ItemsState["items"]
): SetItemsActionInterface => ({
  type: ItemsActionsType.SET_ITEMS,
  payload,
});

export const fetchFavorites = (): FetchFavoritesActionInterface => ({
  type: ItemsActionsType.FETCH_FAVORITES,
});

export const setFavorites = (
  payload: ItemsState["items"]
): SetFavoritesActionInterface => ({
  type: ItemsActionsType.SET_FAVORITES,
  payload,
});

export const addFavorites = (
  payload: Item
): AddFavoritesActionInterface => ({
  type: ItemsActionsType.ADD_FAVORITES,
  payload,
});

export const setLoadingStateItems = (
  payload: LoadingState
): SetItemsLoadingStateActionInterface => ({
  type: ItemsActionsType.SET_LOADING_STATE,
  payload,
});
