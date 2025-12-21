import { CDN_URL } from "../utils/constants"; //this is an named import 

const RestaurantCard = (props) => {
    const { resName } = props; //destructre props
    const { name, cuisines=[], avgRating, costForTwo, sla, cloudinaryImageId } = resName;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="not found" />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
      <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;