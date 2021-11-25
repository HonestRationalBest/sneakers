import { RootState } from '../../store'
import {  LoadingState, OrdersState } from './state'

export const selectOrders = (state: RootState): OrdersState['orders'] => state.orders.orders

export const selectLoadingState = (state: RootState): LoadingState =>
state.orders.loadingState

export const selectIsOrdersLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING
