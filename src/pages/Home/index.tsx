import { useEffect } from "react";
import "./style/Home.scss";
import { Slider } from "../../components/Slider/Slider";
import { GridItem } from "../../components/GridItem/GridItem";

import { fetchItems } from "../../store/ducks/items/actionCreaters";
import { useDispatch, useSelector } from "react-redux";
import { selectIsItemsLoading, selectItems } from "../../store/ducks/items/selectors";
import { EmptyGridItem } from "../../components/EmptyGridItem/EmptyGridItem";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const isLoading = useSelector(selectIsItemsLoading);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

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
              items.map((item) => {
                return <GridItem {...item} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
