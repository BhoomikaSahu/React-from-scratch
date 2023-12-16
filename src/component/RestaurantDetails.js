import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetails = () => {
  const { id } = useParams();
  const menuItems = useRestaurantMenu(id);
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
