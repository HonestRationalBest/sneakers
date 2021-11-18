export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface Item {
  _id: string;
  picture: string;
  title: string;
  price: number;
}

export interface ItemsState {
  items: Item[];
  favorites: Item[];
  loadingState: LoadingState;
}
