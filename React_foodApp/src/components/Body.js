import { useState } from "react";
import { restrautList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const BodyComponent = () => {
  const [restuarants, setRestuarants] = useState(restrautList);
  const [searchText, setSearchText] = useState();

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restuarants);
            setRestuarants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restuarant-list">
        {restuarants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
