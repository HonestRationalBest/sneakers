import { combineReducers } from "redux";
import { itemsReducer } from "./ducks/items/reducer";

export const rootReduceer = combineReducers({
  items: itemsReducer,
});
