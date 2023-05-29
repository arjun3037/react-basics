import React  from "react";
import ReactDOM from "react-dom/client" 

/**
 * Header
 *  - logo
 *  - navItem
 * Body 
 *  - Search Bar
 *  - Restaurant Container
 *      = Restaurant Card
 * Footer
 *  - Copyright disclaimer
 *  - Links
 *  - Contacts info
 */


const RestaurantCard = () =>{
    return (
        <div className="res-card">
            <h3>Meghna Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>

        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className ="logo" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMP3SJdeoXs2o_qBuKAWtetU132VTFvKOt_IzdbVYBQ&s"/>
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


const AppLayout = () => {
    return (
    <div className="app">
        <Header/>
        <Body/>

    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<AppLayout/>);

