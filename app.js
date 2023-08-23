import { getElementById } from "domutils";
import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 * -----logo
 * -----nav items
 * Body
 * ---search bar
 * ---restaurant container
 * -----restaurant card
 * Footer
 * ----copyrights
 * ----links
 * ----address
 * ----contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU" />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aqsnrylokzpn45qhg1pb"
      />
      <h3>Meghna Foods</h3>
      <h5>Biryani,North Indian,Asian</h5>
      <h5>4.4 stars</h5>
      <h5>38 mins</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
