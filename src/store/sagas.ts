import { all } from "redux-saga/effects";
import { itemsSaga } from "./ducks/items/saga";

export default function* rootSaga() {
  yield all([itemsSaga()]);
}
