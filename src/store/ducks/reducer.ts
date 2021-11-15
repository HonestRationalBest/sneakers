import produce, { Draft } from 'immer'
import { ItemsActions, ItemsActionsType } from './actionCreaters'
import { ItemsState, LoadingState } from './state'

const initialItemsState: ItemsState = {
  items: [],
  loadingState: LoadingState.NEVER,
}

export const itemsReducer = produce((draft: Draft<ItemsState>, action: ItemsActions) => {
  switch (action.type) {
    case ItemsActionsType.SET_ITEMS:
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break
    case ItemsActionsType.FETCH_ITEMS:
      draft.items = []
      draft.loadingState = LoadingState.LOADING
      break
    case ItemsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload
      break
  }
}, initialItemsState)