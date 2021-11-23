import React from "react";
import "./style/icons/icons.scss";
import "./style/fonts/fonts.scss";
import "./style/app/app.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import { Header } from "./components/Header/Header";
import Favorites from "./pages/favorites";


const App = () => {
  return (
    <div className="_container">
    <Header />
    <Routes>
      <>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/favorites" element={<Favorites />} />
      </>
    </Routes>
    </div>
  );
};

export default App;
