import { Cart } from "../cart/state";

export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

// export interface Order {
//   orders: Cart[]
// }

export interface OrdersState {
  orders: Cart[];
  loadingState: LoadingState;
}
