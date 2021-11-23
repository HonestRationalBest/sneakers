import { useEffect } from "react";
import "./style/Home.scss";
import { Slider } from "../../components/Slider/Slider";
import { GridItem } from "../../components/GridItem/GridItem";

import { fetchFavorites, fetchItems } from "../../store/ducks/items/actionCreaters";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorites,
  selectIsItemsLoading,
  selectItems,
} from "../../store/ducks/items/selectors";
import { EmptyGridItem } from "../../components/EmptyGridItem/EmptyGridItem";
import { selectCart } from "../../store/ducks/cart/selectors";
import { Item } from "../../store/ducks/items/state";
import { fetchCart } from "../../store/ducks/cart/actionCreaters";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const favorites = useSelector(selectFavorites);
  const cart = useSelector(selectCart);
  const isLoading = useSelector(selectIsItemsLoading);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchFavorites());
    dispatch(fetchCart());
  }, [dispatch]);

  const generateItem = (item: Item) => {
    const isFavorites = favorites.find((elem) => elem._id === item._id);
    const isInCart = cart.find((elem) => elem._id === item._id);

    return (
      <GridItem
        item={item}
        isFavoriteDefault={!!isFavorites}
        isInCartDefault={!!isInCart}
      />
    );
  };

  const GridItems = items.map((item) => {
    return generateItem(item);
  });

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__slider">
          <Slider />
        </div>
        <div className="home__grid grid-home">
          <div className="grid-home__navbar navbar-grid">
            <div className="navbar-grid__title">All sneakers</div>
            <form className="navbar-grid_search-form form-search">
              <button
                type="submit"
                className="form-search__btn _icon-search-icon"
              ></button>
              <input
                autoComplete="off"
                type="text"
                name="form[]"
                placeholder="Search..."
                className="form-search__input"
              />
            </form>
          </div>
          <div className="grid-home__grid">
            {isLoading ? (
              <>
                <EmptyGridItem />
                <EmptyGridItem />
                <EmptyGridItem />
                <EmptyGridItem />
                <EmptyGridItem />
                <EmptyGridItem />
                <EmptyGridItem />
                <EmptyGridItem />
                <EmptyGridItem />
                <EmptyGridItem />
                <EmptyGridItem />
                <EmptyGridItem />
              </>
            ) : (
              GridItems
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
