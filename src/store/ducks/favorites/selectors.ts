import { RootState } from '../../store'
import { FavoritesState, LoadingState } from './state'

export const selectFavorites = (state: RootState): FavoritesState['favorites'] => state.favorites.favorites

export const selectLoadingState = (state: RootState): LoadingState =>
state.items.loadingState

export const selectIsItemsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING
