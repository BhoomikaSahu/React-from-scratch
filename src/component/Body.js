import { useEffect, useState } from "react";
import { resObj } from "../utils/mockData";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();

  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const result = await data.json();
      setListOfRestaurants(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
  if(!listOfRestaurants.length) {
    return <Shimmer />
  }
  return (
    <div className="body">
      <div className="filter-restaurants">
        <button
          className="filter-btn"
          onClick={() => {
            const list = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(list);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants && listOfRestaurants.map((res) => (
          <ResCard resObj={res} />
        ))}
        {/* <ResCard resObj={resObj[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
