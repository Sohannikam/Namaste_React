import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // const {resId} = useParams();

  const {resId} = useParams()


  useEffect(() => {
    getRestaurantMenu(resId);
  }, []);

  async function getRestaurantMenu(restaurantId) {
try {
const response = await fetch(
MENU_API+resId
);
const json = await response.json();
setResInfo(json.data)
} catch (error) {
console.error("Error fetching menu:", error);
}
}


  // ✅ guard FIRST
  if (resInfo === null) return <Shimmer />;

  // ✅ safe destructuring AFTER guard
  const { name, cuisines, costForTwoMessage } =
  resInfo.cards[2].card.card.info;

  const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

console.log("itemCards is",itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>

      <h2>Menu</h2>

      <ul>
        {itemCards.map((item)=>(
          <li key={item.card.info.id}>{item.card.info.name}{" -  Rs"} {item.card.info.price/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
