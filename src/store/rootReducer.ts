import { cartReducer } from './ducks/cart/reducer';
import { combineReducers } from "redux";
import { favoritesReducer } from "./ducks/favorites/reducer";
import { itemsReducer } from './ducks/items/reducer';
import { ordersReducer } from './ducks/orders/reducer';

export const rootReduceer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
  orders: ordersReducer
});
