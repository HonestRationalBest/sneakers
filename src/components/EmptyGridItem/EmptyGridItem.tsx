import React from "react";
import "../GridItem/style/GridItem.scss"

export const EmptyGridItem:React.FC = () => {
  return (
    <div className="item empty-item">
      <header className="empty-item__header"></header>
      <div className="empty-item__main main-empty-item">
          <div className="main-empty-item__title"></div>
          <div className="main-empty-item__text"></div>
      </div>
      <footer className="empty-item__footer footer-empty-item"
      >
          <div className="footer-empty-item__text"></div>
          <div className="footer-empty-item__button"></div>
      </footer>
    </div>
  );
};
