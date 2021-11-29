import axios from "axios";
import { Item } from "../store/ducks/items/state";

interface Responce<T> {
  status: string;
  data: T;
}

export const FavoritesApi = {
  fetchFavorites(): Promise<Responce<Item[]>> {
    return axios
      .get("https://sneakersbackend.herokuapp.com/items")
      .then((res) => res.data.favorites)
      .catch((e) => console.log(e));
  },
};
