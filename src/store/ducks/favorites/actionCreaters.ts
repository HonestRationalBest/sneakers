import {
  SetFavoritesActionInterface,
  FetchFavoritesActionInterface,
  FavoritesActionsType,
  RemoveFavoritesActionInterface,
  AddFavoritesActionInterface,
  SetFavoritesLoadingStateActionInterface
} from "./actionCreatersInterfaces";
import { Favorite, FavoritesState, LoadingState } from "./state";

export const fetchFavorites = (): FetchFavoritesActionInterface => ({
  type: FavoritesActionsType.FETCH_FAVORITES,
});

export const setFavorites = (
  payload: FavoritesState["favorites"]
): SetFavoritesActionInterface => ({
  type: FavoritesActionsType.SET_FAVORITES,
  payload,
});

export const addFavorites = (
  payload: Favorite
): AddFavoritesActionInterface => ({
  type: FavoritesActionsType.ADD_FAVORITES,
  payload,
});

export const removeFavorites = (
  payload: string
): RemoveFavoritesActionInterface => ({
  type: FavoritesActionsType.REMOVE_FAVORITES,
  payload,
});

export const setLoadingStateFavorites = (
  payload: LoadingState
): SetFavoritesLoadingStateActionInterface => ({
  type: FavoritesActionsType.SET_LOADING_STATE,
  payload,
});
