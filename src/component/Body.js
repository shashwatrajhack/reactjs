import RestaurantCard from "./restaurantCard";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";
import { async } from "regenerator-runtime";

const Body = () => {
  const [listOfRestaurant,setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9456508&lng=77.707385&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )

      const json = await data.json();
      console.log(json);
      setListOfRestaurant(json.data.cards[2].data.cards);
  };


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))};
      </div>
    </div>
  );
};

export default Body;
