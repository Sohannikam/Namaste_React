import { LOGO_URL } from "../utils/constants";
import {  useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    // if no dependecny array that means useEfeect is called on every render 
    // if the depency arry is empty then useEffect is called on only initial Render and just once when component render for first time 
    // if dependency array is [btnnameReact] => called everytime btnNameReact is updated 
    const [btnnameReact,setBtnnameReact]=useState("login")

    const onlineStatus = useOnlineStatus()
    return (
        <div className="header">

            <div className="logo-contaienr">
                <img className="logoimg" src={LOGO_URL} alt="not found" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus ? "🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About Us</Link></li>
                    <li> <Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                     <button className="login-btn" onClick={
                        ()=>{
                        btnnameReact ==="login"?setBtnnameReact("Logout"):setBtnnameReact("login");
                        }
                     }>{btnnameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;