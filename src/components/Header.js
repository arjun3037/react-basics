import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {

    const[buttonName,setButtonName] = useState("login");

    // useEffect , if no dependency array => useEffect is called on every render
    // if dependency array s empty => useEffect is called only initial render() and just once
    // if dependency array having some value => it will called when some dependnecy updated
    useEffect(() =>{
        console.log("useEffecr called")
    },[buttonName]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className ="logo" src ={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ui>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact us </Link>
                    </li>
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