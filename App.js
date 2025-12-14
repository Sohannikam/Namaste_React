import React from "react";
import ReactDom from "react-dom/client"
import logo from './assets/foodlogo.jpeg'
// food delivery app component 
/**
 * Header
 * - logo
 * - Nav items
 * Body
 * - Search
 * - Restrauratncontainer
 *      - RestoCards
 *      - Img
 *      - Name of res , star rating , cuisine,delery tie
 * Footer
 * -Copyright
 * -links
 * -Address
 * -Contact
 */

const Header = () => {
    return (
        <div className="header">

            <div className="logo-contaienr">
                <img className="logoimg" src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="not found" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resName } = props; //destructre props
    const { name, cuisine, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = resName;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="not found" />
            <h3>{name}</h3>
            <h4>{cuisine.join(" , ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
const resList = [
    {
        id: 1,
        name: "Spice Hub",
        cuisine: ["Indian", "Chinese"],
        avgRating: 4.3,
        costForTwo: 350,
        deliveryTime: 30,
        cloudinaryImageId: "e3zv8rj4w8d8l5qzqf1w"
    },
    {
        id: 2,
        name: "Pizza Palace",
        cuisine: ["Italian", "Fast Food"],
        avgRating: 4.1,
        costForTwo: 500,
        deliveryTime: 25,
        cloudinaryImageId: "h2o6r6lqv7k9p8s4t3x1"
    },
    {
        id: 3,
        name: "Burger Junction",
        cuisine: ["American", "Fast Food"],
        avgRating: 3.9,
        costForTwo: 300,
        deliveryTime: 20,
        cloudinaryImageId: "y2s8x9k1c4q5p6o7z3m8"
    },
    {
        id: 4,
        name: "Biryani Express",
        cuisine: ["Indian", "Mughlai"],
        avgRating: 4.4,
        costForTwo: 400,
        deliveryTime: 28,
        cloudinaryImageId: "l9n6c0v3m2d4x8q1y7z5"
    },
    {
        id: 5,
        name: "Green Bowl",
        cuisine: ["Healthy", "Salads"],
        avgRating: 4.6,
        costForTwo: 450,
        deliveryTime: 35,
        cloudinaryImageId: "a1b2c3d4e5f6g7h8i9j0"
    },
    {
        id: 6,
        name: "Tandoori Treats",
        cuisine: ["Indian", "North Indian"],
        avgRating: 4.2,
        costForTwo: 380,
        deliveryTime: 32,
        cloudinaryImageId: "x4y5z6a7b8c9d0e1f2g3"
    },
    {
        id: 7,
        name: "Wok & Roll",
        cuisine: ["Chinese", "Asian"],
        avgRating: 4.0,
        costForTwo: 420,
        deliveryTime: 27,
        cloudinaryImageId: "k1l2m3n4o5p6q7r8s9t0"
    },
    {
        id: 8,
        name: "South Spice",
        cuisine: ["South Indian"],
        avgRating: 4.5,
        costForTwo: 300,
        deliveryTime: 22,
        cloudinaryImageId: "u9v8w7x6y5z4a3b2c1d0"
    },
    {
        id: 9,
        name: "Roll Factory",
        cuisine: ["Fast Food", "Wraps"],
        avgRating: 3.8,
        costForTwo: 250,
        deliveryTime: 18,
        cloudinaryImageId: "p9o8i7u6y5t4r3e2w1q0"
    },
    {
        id: 10,
        name: "Cafe Delight",
        cuisine: ["Cafe", "Desserts"],
        avgRating: 4.3,
        costForTwo: 600,
        deliveryTime: 40,
        cloudinaryImageId: "c0d1e2f3g4h5i6j7k8l9"
    },
    {
        id: 11,
        name: "Street Foods",
        cuisine: ["Indian", "Snacks"],
        avgRating: 4.1,
        costForTwo: 200,
        deliveryTime: 15,
        cloudinaryImageId: "m9n8b7v6c5x4z3a2s1d0"
    },
    {
        id: 12,
        name: "BBQ Nation",
        cuisine: ["Barbecue", "Grill"],
        avgRating: 4.6,
        costForTwo: 700,
        deliveryTime: 45,
        cloudinaryImageId: "z1x2c3v4b5n6m7a8s9d0"
    },
    {
        id: 13,
        name: "Sushi House",
        cuisine: ["Japanese"],
        avgRating: 4.4,
        costForTwo: 800,
        deliveryTime: 50,
        cloudinaryImageId: "j9k8l7h6g5f4d3s2a1q0"
    },
    {
        id: 14,
        name: "Mexi Grill",
        cuisine: ["Mexican"],
        avgRating: 4.0,
        costForTwo: 550,
        deliveryTime: 33,
        cloudinaryImageId: "r0t1y2u3i4o5p6a7s8d9"
    },
    {
        id: 15,
        name: "Dessert Heaven",
        cuisine: ["Bakery", "Desserts"],
        avgRating: 4.7,
        costForTwo: 450,
        deliveryTime: 26,
        cloudinaryImageId: "w1e2r3t4y5u6i7o8p9a0"
    }
];




const Body = () => {
    return (
        <div className="body">
            <div className="Search">
                Search
            </div>
            <div className="res-container">
{/* react itself says dont use index as keys use unqiue id */}
               {resList.map((restraurant) => <RestaurantCard key={restraurant.id} resName={restraurant}/>)}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
