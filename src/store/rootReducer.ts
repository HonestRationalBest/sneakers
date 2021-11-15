import { combineReducers } from "redux";
import { itemsReducer } from "./ducks/reducer";

export const rootReduceer = combineReducers({
  items: itemsReducer,
});
