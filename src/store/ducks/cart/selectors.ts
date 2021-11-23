import { RootState } from '../../store'
import { CartState, LoadingState } from './state'

export const selectCart = (state: RootState): CartState['cart'] => state.cart.cart

export const selectLoadingState = (state: RootState): LoadingState =>
state.cart.loadingState

export const selectIsCartLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING
