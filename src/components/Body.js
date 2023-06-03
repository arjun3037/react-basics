import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {

    let listOfRest = [
    { 
    "data": {
      "id": "466165",
      "name": "Enoki - Fresh Asian Kitchen",
      "cloudinaryImageId": "omkqoa7jvuwl47wr9ite",
      "costForTwo": 100000,
      "avgRating": "3.0",
      "cuisines": [
        "Asian",
        "Pan-Asian",
        "Japanese",
        "Chinese",
        "Thai"
      ]
    },
    },
    { 
        "data": {
          "id": "466166",
          "name": "Dominos",
          "cloudinaryImageId": "omkqoa7jvuwl47wr9ite",
          "costForTwo": 100000,
          "avgRating": "4.5",
          "cuisines": [
            "Asian",
            "Pan-Asian",
            "Japanese",
            "Chinese",
            "Thai"
          ]
        },
        }
  ];



    return (
        <div className="body">
            <div className="filter">
                <button onClick={() => {
                    
                    // filter logic goes her
                    listOfRest = listOfRest.filter((res) => res.data.avgRating > 4);
                    console.log(listOfRest);

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