import { useEffect, useState } from "react";
import { resObj } from "../utils/mockData";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [totalRestaurants, setTotalRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
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
  
  if(!onlineStatus) {
    return <h1>Please check your internet connection!!</h1>
  } 

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
          listOfRestaurants.map((res) => <Link key={res.info.id} to={'/res-details/' + res.info.id}><ResCard resObj={res} /></Link>)
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;