import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const fetchData = await fetch(MENU_API + id);
    const jsonData = await fetchData.json();
    setMenuItems(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
  };
  if (menuItems.length === 0) {
    return <Shimmer />;
  }
  console.log(menuItems[0]);
  return (
    <div>
      {menuItems.map((item) => {
        return <div key={item.card.info.id}>
            <p>{item.card.info.name} - {item.card.info.price/100}</p>
        </div>;
      })}
    </div>
  );
};

export default RestaurantDetails;
