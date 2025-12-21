import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    
    const [btnnameReact,setBtnnameReact]=useState("login")
    return (
        <div className="header">

            <div className="logo-contaienr">
                <img className="logoimg" src={LOGO_URL} alt="not found" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
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