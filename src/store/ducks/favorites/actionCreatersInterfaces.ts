import { Action } from "redux";
import { Favorite, FavoritesState, LoadingState } from "./state";

export enum FavoritesActionsType {
  FETCH_FAVORITES = "favorites/FETCH_FAVORITES",
  SET_FAVORITES = "favorites/SET_FAVORITES",
  ADD_FAVORITES = "favorites/ADD_FAVORITES",
  REMOVE_FAVORITES = "favorites/REMOVE_FAVORITES",
  SET_LOADING_STATE = "favorites/LOADING_STATE",
}

export interface FetchFavoritesActionInterface
  extends Action<FavoritesActionsType> {
  type: FavoritesActionsType.FETCH_FAVORITES;
}

export interface SetFavoritesActionInterface extends Action<FavoritesActionsType> {
  type: FavoritesActionsType.SET_FAVORITES;
  payload: FavoritesState["favorites"];
}

export interface SetFavoritesLoadingStateActionInterface
  extends Action<FavoritesActionsType> {
  type: FavoritesActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}


export interface AddFavoritesActionInterface
  extends Action<FavoritesActionsType> {
  type: FavoritesActionsType.ADD_FAVORITES;
  payload: Favorite;
}

export interface RemoveFavoritesActionInterface
  extends Action<FavoritesActionsType> {
  type: FavoritesActionsType.REMOVE_FAVORITES;
  payload: string;
}


export type FavoritesActions =
  | FetchFavoritesActionInterface
  | SetFavoritesActionInterface
  | AddFavoritesActionInterface
  | SetFavoritesLoadingStateActionInterface
  | RemoveFavoritesActionInterface

