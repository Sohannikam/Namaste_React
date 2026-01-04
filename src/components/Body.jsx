import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    //Local State Variable - super powerful varaible 
const [listOfRestaurant,setListOfRestaurant]=useState([]);
const[updatedlist,setUpdatedList]=useState([])

const [searchText,setSearchText]=useState("")

// whenever state variable update react rerenders the component 

useEffect(()=>{
        console.log("useEffect called after search button executed")

fetchData();    
},[]);

const fetchData =async ()=>{
    try {
         const data= await fetch(RESTAURANT_LIST_API)

    const json = await data.json();
    console.log(json)

    setListOfRestaurant(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
)
     setUpdatedList(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
)
        
    } catch (error) {
console.log("Error:", error);
} finally {
}
   
};

// Conditional Rendering 

const onlineStatus = useOnlineStatus();

if(onlineStatus === false){
    return <h1>Oops looks like yore offline please go online to explore website </h1>
}

    return listOfRestaurant.length === 0?<Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                    
                    const filterresto=listOfRestaurant.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setUpdatedList(filterresto)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filterlist =listOfRestaurant.filter(res=>res.info.avgRating>4.3);
                   setUpdatedList(filterlist)
                   
                 }}
                    >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {/* react itself says dont use index as keys use unqiue id */}
                {updatedlist.map((restraurant) => <Link to={"/restaurants/"+restraurant.info.id} key={restraurant.info.id}><RestaurantCard  resName={restraurant.info} /></Link> )}
            </div>
        </div>
    )
}

export default Body;