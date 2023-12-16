import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const fetchData = await fetch(MENU_API + resId);
    const jsonData = await fetchData.json();
    setMenuItems(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
  };
  return menuItems;
};

export default useRestaurantMenu;
