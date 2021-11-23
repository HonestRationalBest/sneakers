import axios from "axios";
import { Item } from "../store/ducks/items/state";

interface Responce<T> {
  status: string;
  data: T;
}

export const CartApi = {
  fetchCart(): Promise<Responce<Item[]>> {
    return axios
      .get("http://localhost:3001/cart")
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },
};
