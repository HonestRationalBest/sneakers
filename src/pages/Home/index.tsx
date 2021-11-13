import React from "react";
import "./style/Home.scss";
import { Slider } from "../../components/Slider/Slider";
import { GridItem as Item } from "../../components/GridItem/GridItem";

const Home = () => {
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
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
