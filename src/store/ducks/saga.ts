import { call, put, takeLatest } from 'redux-saga/effects'
import { ItemsApi } from '../../api/itemsApi'
import { ItemsActionsType, setItems, setLoadingStateItems } from './actionCreaters'
import { LoadingState } from './state'

export function* fetchItemsRequest(): any {
  try {
    const items = yield call(ItemsApi.fetchItems)
    yield put(setItems(items))
  } catch (e) {
    yield put(setLoadingStateItems(LoadingState.ERROR))
  }
}

export function* itemsSaga() {
  yield takeLatest(ItemsActionsType.FETCH_ITEMS, fetchItemsRequest)
}