import { call, put, takeLatest } from 'redux-saga/effects'
import { OrdersApi } from '../../../api/orderApi'
import { setLoadingStateOrders, setOrders } from './actionCreaters'
import { OrdersActionsType } from './actionCreatersInterfaces'
import { LoadingState } from './state'

export function* fetchOrdersRequest(): any {
  try {
    const orders = yield call(OrdersApi.fetchOrders)
    yield put(setOrders(orders))
  } catch (e) {
    yield put(setLoadingStateOrders(LoadingState.ERROR))
  }
}

export function* ordersSaga() {
  yield takeLatest(OrdersActionsType.FETCH_ORDERS, fetchOrdersRequest)
}