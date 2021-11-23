import { call, put, takeLatest } from "redux-saga/effects";
import { FavoritesApi } from "../../../api/favoritesApi";
import { setFavorites, setLoadingStateFavorites } from "./actionCreaters";
import { FavoritesActionsType } from "./actionCreatersInterfaces";
import { LoadingState } from "./state";

export function* fetchFavoritesRequest(): any {
  try {
    const favorites = yield call(FavoritesApi.fetchFavorites);
    yield put(setFavorites(favorites));
  } catch (e) {
    yield put(setLoadingStateFavorites(LoadingState.ERROR));
  }
}

export function* favoritesSaga() {
  yield takeLatest(FavoritesActionsType.FETCH_FAVORITES, fetchFavoritesRequest);
}
