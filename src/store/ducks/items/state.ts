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

export interface Favorite extends Item{
  isFavorite: boolean
}

export interface ItemsState {
  items: Item[];
  favorites: Favorite[];
  loadingState: LoadingState;
}
