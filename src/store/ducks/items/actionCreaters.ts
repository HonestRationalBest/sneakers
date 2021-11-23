import {
  AddFavoritesActionInterface,
  FetchFavoritesActionInterface,
  FetchItemsActionInterface,
  ItemsActionsType,
  RemoveFavoritesActionInterface,
  SetFavoritesActionInterface,
  SetItemsActionInterface,
  SetItemsLoadingStateActionInterface,
} from "./actionCreatersInterfaces";
import { Favorite, ItemsState, LoadingState } from "./state";

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
  payload: ItemsState["favorites"]
): SetFavoritesActionInterface => ({
  type: ItemsActionsType.SET_FAVORITES,
  payload,
});

export const addFavorites = (
  payload: Favorite
): AddFavoritesActionInterface => ({
  type: ItemsActionsType.ADD_FAVORITES,
  payload,
});

export const removeFavorites = (
  payload: string
): RemoveFavoritesActionInterface => ({
  type: ItemsActionsType.REMOVE_FAVORITES,
  payload,
});

export const setLoadingStateItems = (
  payload: LoadingState
): SetItemsLoadingStateActionInterface => ({
  type: ItemsActionsType.SET_LOADING_STATE,
  payload,
});


