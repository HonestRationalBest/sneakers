import { Item } from "../items/state";

export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface Cart extends Item{
  isInCart: boolean
}

export interface CartState {
  cart: Item[];
  loadingState: LoadingState;
}
