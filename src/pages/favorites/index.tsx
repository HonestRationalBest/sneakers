import React from 'react'
import "./style/Favorites.scss";
import smile from "../../images/favorites_smile.png";
import { NavLink } from 'react-router-dom';

const Favorites = () => {
    return (
        <div className="favorites">
        <img src={smile} alt="smile" className="favorites__img" />
        <div className="favorites__title">You don't have any favorites</div>
        <div className="favorites__text">You added nothing!</div>
        <NavLink to="/">
          <button type="button" className="favorites__button _icon-arrow-left">
            Return
          </button>
        </NavLink>
      </div>
    )
}

export default Favorites
