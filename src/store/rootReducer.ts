import { cartReducer } from './ducks/cart/reducer';
import { combineReducers } from "redux";
import { itemsReducer } from "./ducks/items/reducer";

export const rootReduceer = combineReducers({
  items: itemsReducer,
  cart: cartReducer
});
