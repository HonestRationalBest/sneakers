import { all } from "redux-saga/effects";
import { cartSaga } from "./ducks/cart/saga";
import { favoritesSaga } from "./ducks/favorites/saga";
import { itemsSaga } from "./ducks/items/saga";
import { ordersSaga } from "./ducks/orders/saga";

export default function* rootSaga() {
  yield all([itemsSaga(), cartSaga(), favoritesSaga(), ordersSaga()]);
}
