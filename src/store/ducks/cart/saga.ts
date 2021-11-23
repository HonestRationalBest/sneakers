import { call, put, takeLatest } from 'redux-saga/effects'
import { CartApi } from '../../../api/cartApi'
import {  setCart, setLoadingStateCart} from './actionCreaters'
import { CartActionsType } from './actionCreatersInterfaces'
import { LoadingState } from './state'


export function* fetchCartRequest(): any {
  try {
    const cart = yield call(CartApi.fetchCart)
    yield put(setCart(cart))
  } catch (e) {
    yield put(setLoadingStateCart(LoadingState.ERROR))
  }
}

export function* cartSaga() {
  yield takeLatest(CartActionsType.FETCH_CART, fetchCartRequest)
}