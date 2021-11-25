import React from "react";
import "./style/Favorites.scss";
import smile from "../../images/favorites_smile.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { GridItem } from "../../components/GridItem/GridItem";
import { selectFavorites } from "../../store/ducks/favorites/selectors";

const Favorites: React.FC = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length ? (
        <div className="main-favorites">
          <div className="main-favorites__container">
            <div className="main-favorites__offer">
              <NavLink to="/">
                <button
                  type="button"
                  className="main-favorites__button _icon-arrow-icon"
                ></button>
              </NavLink>
              <div className="main-favorites__title">Мои закладки</div>
            </div>
            <div className="main-favorites__grid">
              {favorites.map((item) => {
                return (
                  <GridItem
                    item={item}
                    isFavoriteDefault={true}
                    key={item._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="favorites">
          <img src={smile} alt="smile" className="favorites__img" />
          <div className="favorites__title">You don't have any favorites</div>
          <div className="favorites__text">You added nothing!</div>
          <NavLink to="/">
            <button
              type="button"
              className="favorites__button _icon-arrow-left"
            >
              Return
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Favorites;
