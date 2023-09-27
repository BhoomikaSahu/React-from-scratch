import { resObj } from "../utils/mockData";
import ResCard from "./ResCard";

const Body = () => {
  let listOfRestaurants = [];
  return (
    <div className="body">
      <div className="filter-restaurants">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = resObj.filter((res) => {
              return res.info.rating.aggregate_rating > 4
            });
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <ResCard resObj={res} />
        ))}
        {/* <ResCard resObj={resObj[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
