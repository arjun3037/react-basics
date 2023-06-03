import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                </ui>
            </div>
        </div>
    )
}

export default Header;