import { Item } from "../items/state";

export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface Favorite extends Item{
  isFavorite: boolean
}

export interface FavoritesState {
  favorites: Favorite[];
  loadingState: LoadingState;
}
