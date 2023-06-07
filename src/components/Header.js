import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const[buttonName,setButtonName] = useState("login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className ="logo" src ={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ui>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        buttonName === 'login' ? setButtonName("logOut") : setButtonName("login");
                        
                        
                        }}>{buttonName}</button>
                </ui>
            </div>
        </div>
    )
}

export default Header;