import {
  FetchItemsActionInterface,
  ItemsActionsType,
  SetItemsActionInterface,
  SetItemsLoadingStateActionInterface,
} from "./actionCreatersInterfaces";
import { ItemsState, LoadingState } from "./state";

export const fetchItems = (): FetchItemsActionInterface => ({
  type: ItemsActionsType.FETCH_ITEMS,
});

export const setItems = (
  payload: ItemsState["items"]
): SetItemsActionInterface => ({
  type: ItemsActionsType.SET_ITEMS,
  payload,
});

export const setLoadingStateItems = (
  payload: LoadingState
): SetItemsLoadingStateActionInterface => ({
  type: ItemsActionsType.SET_LOADING_STATE,
  payload,
});
