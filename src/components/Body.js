import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";



const Body = () => {

// local state variables - super powerful variable
const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

    // never create usestate outside the function compnent
    // never create useState inside the if and else , for loop , inside functions , it will create the inconsistency in our project
    // fist argument is callback function and second argument is depedency array. 
useEffect(() =>{

    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
        
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    
                </div>
                <button onClick={() => {
                    // filter logic goes her// Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);}} className="filter-btn"> Search</button>
            </div>


            <div className="res-container">
            {filteredRestaurant.map((restaurant) => (
                <Link to={"/restaurant/"+restaurant?.info.id} key={restaurant?.info.id}>
                    <RestaurantCard resData={restaurant?.info} />
                </Link>
                
          
        ))}
            </div>
        </div> 
    )
}

export default Body;