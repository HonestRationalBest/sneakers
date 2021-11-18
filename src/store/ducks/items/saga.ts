import { call, put, takeLatest } from 'redux-saga/effects'
import { ItemsApi } from '../../../api/itemsApi'
import {  setFavorites, setItems, setLoadingStateItems } from './actionCreaters'
import { ItemsActionsType } from './actionCreatersInterfaces'
import { LoadingState } from './state'

export function* fetchItemsRequest(): any {
  try {
    const items = yield call(ItemsApi.fetchItems)
    yield put(setItems(items))
  } catch (e) {
    yield put(setLoadingStateItems(LoadingState.ERROR))
  }
}

export function* fetchFavoritesRequest(): any {
  try {
    const favorites = yield call(ItemsApi.fetchFavorites)
    yield put(setFavorites(favorites))
  } catch (e) {
    yield put(setLoadingStateItems(LoadingState.ERROR))
  }
}

export function* itemsSaga() {
  yield takeLatest(ItemsActionsType.FETCH_ITEMS, fetchItemsRequest)
  yield takeLatest(ItemsActionsType.FETCH_FAVORITES, fetchFavoritesRequest)
}