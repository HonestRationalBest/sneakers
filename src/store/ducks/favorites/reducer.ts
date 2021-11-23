import produce, { Draft } from "immer";
import {
  FavoritesActions,
  FavoritesActionsType,
} from "./actionCreatersInterfaces";
import { FavoritesState, LoadingState } from "./state";

const initialFavoritesState: FavoritesState = {
  favorites: [],
  loadingState: LoadingState.NEVER,
};

export const favoritesReducer = produce(
  (draft: Draft<FavoritesState>, action: FavoritesActions) => {
    switch (action.type) {
      case FavoritesActionsType.SET_FAVORITES:
        draft.favorites = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case FavoritesActionsType.FETCH_FAVORITES:
        draft.favorites = [];
        draft.loadingState = LoadingState.LOADING;
        break;
      case FavoritesActionsType.ADD_FAVORITES:
        draft.favorites.push(action.payload);
        break;
      case FavoritesActionsType.REMOVE_FAVORITES:
        draft.favorites = draft.favorites.filter(
          (item) => item._id !== action.payload
        );
        break;
      case FavoritesActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
    }
  },
  initialFavoritesState
);
