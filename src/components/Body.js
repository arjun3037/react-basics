import React from "react";
import RestaurantCard from "./RestaurantCard";

import { useState , useEffect} from "react";



const Body = () => {

// local state variables - super powerful variable
const [listOfRest,setListOfRest] = useState([]);

const [searchText,setSearchText] = useState("");

// ist argument is callback function and second argument is depedency array. 
useEffect(() =>{
    fetchData();
}, []);

const fetchData = async () => {
    // fetch() method provided by browser.
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5565541&lng=77.4056451&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    setListOfRest(json?.data?.cards[2]?.data?.data?.cards);

    console.log(json);
}

if(listOfRest.length <= 0){
    return <h1>Loading............</h1>
}


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        // filter the list and update the UI
                        //searchText
                        console.log();
                    }}>Search</button>
                </div>
                <button onClick={() => {
                    // filter logic goes her
                    const filterList = listOfRest.filter((res) => res.data.avgRating > 4);
                    setListOfRest(filterList);
                    console.log(filterList);

                    }} className="filter-btn"> Top Rated Restaurant</button>
            </div>


            <div className="res-container">
                {
                    listOfRest.map(rest => <RestaurantCard key={rest.data.id}  restData={rest}/>)
                }
            </div>
        </div>
    )
}

export default Body;