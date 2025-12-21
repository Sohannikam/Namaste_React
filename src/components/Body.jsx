import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    //Local State Variable - super powerful varaible 
const [listOfRestaurant,setListOfRestaurant]=useState([]);

const [searchText,setSearchText]=useState("")

// whenever state variable update react rerenders the component 

useEffect(()=>{
fetchData();    
},[]);

const fetchData =async ()=>{
    const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5288974&lng=73.8665321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )

    const json = await data.json();
    console.log(json)

    setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
)
}

// Conditional Rendering 

    return listOfRestaurant.length === 0?<Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                    const filterresto=listOfRestaurant.filter((res)=>
                        res.info.name.includes(searchText)
                    )
                    setListOfRestaurant(filterresto)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filterlist =listOfRestaurant.filter(res=>res.avgRating>4);
                   setListOfRestaurant(filterlist)
                 }}
                    >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {/* react itself says dont use index as keys use unqiue id */}
                {listOfRestaurant.map((restraurant) => <RestaurantCard key={restraurant.info.id} resName={restraurant.info} />)}
            </div>
        </div>
    )
}

export default Body;