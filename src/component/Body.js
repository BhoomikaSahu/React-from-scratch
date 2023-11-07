import { useEffect, useState } from "react";
import { resObj } from "../utils/mockData";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [totalRestaurants, setTotalRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  if(listOfRestaurants) {
    const [searchText, setSearchText] = useState("");

  }
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    setListOfRestaurants(
      result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setTotalRestaurants(
      result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const [searchTex1t, setSearchTex1t] = useState("");

  return (
    <div className="body">
      <div className="filter-restaurants">
        <button
          className="filter-btn"
          onClick={() => {
            const list = totalRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(list);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchList = totalRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(searchList, totalRestaurants);
              setListOfRestaurants(searchList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants && listOfRestaurants.length ? (
          listOfRestaurants.map((res) => <ResCard resObj={res} />)
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
