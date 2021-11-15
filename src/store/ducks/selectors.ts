import { RootState } from '../store'
import { ItemsState, LoadingState } from './state'

export const selectItems = (state: RootState): ItemsState['items'] => state.items.items

export const selectLoadingState = (state: RootState): LoadingState =>
state.items.loadingState

export const selectIsItemsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING
