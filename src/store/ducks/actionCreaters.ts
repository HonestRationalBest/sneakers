import { Action } from 'redux'
import { ItemsState, LoadingState } from './state'

export enum ItemsActionsType {
  SET_ITEMS = 'items/SET_ITEMS',
  FETCH_ITEMS = 'items/FETCH_ITEMS',
  SET_LOADING_STATE = 'items/LOADING_STATE',
}

export interface FetchItemsActionInterface extends Action<ItemsActionsType> {
  type: ItemsActionsType.FETCH_ITEMS
}

export interface SetItemsActionInterface extends Action<ItemsActionsType> {
  type: ItemsActionsType.SET_ITEMS
  payload: ItemsState['items']
}

export interface SetItemsLoadingStateActionInterface extends Action<ItemsActionsType> {
  type: ItemsActionsType.SET_LOADING_STATE
  payload: LoadingState
}

export const fetchItems = (): FetchItemsActionInterface => ({
  type: ItemsActionsType.FETCH_ITEMS,
})

export const setItems = (payload: ItemsState['items']): SetItemsActionInterface => ({
  type: ItemsActionsType.SET_ITEMS,
  payload,
})

export const setLoadingStateItems = (
  payload: LoadingState
): SetItemsLoadingStateActionInterface => ({
  type: ItemsActionsType.SET_LOADING_STATE,
  payload,
})


export type ItemsActions =
  | FetchItemsActionInterface
  | SetItemsActionInterface
  | SetItemsLoadingStateActionInterface