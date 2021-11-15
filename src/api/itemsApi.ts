import axios from "axios";
import { Item } from "../store/ducks/state";

interface Responce<T> {
  status: string;
  data: T;
}

export const ItemsApi = {
  fetchItems(): Promise<Responce<Item[]>> {
    return axios
      .get("http://localhost:3001/items")
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },
};
