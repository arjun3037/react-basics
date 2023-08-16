import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () =>{

    const[restInfo , setRestInfo] = useState(null);

    const {resId} = useParams();

    console.log(resId);

    useEffect(() => {

        fetchMenu();

    } ,[])

    const fetchMenu = async () => {

        const data = await fetch(
            MENU_API+resId
        );

        const json = await data.json();
        console.log(json)
        setRestInfo(json.data);

    }

        if(restInfo == null) return <h1>"Loading"</h1>

        const data= restInfo?.cards[0]?.card?.card?.info;

        const { itemCards } = restInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card;

        console.log(itemCards);

   

    return (
        <div className="menu">
            <h1>{data?.name}</h1>
            <p>{data?.cuisines.join(" , ")}</p>
            <h3>{data?.costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => 
                    <li key={item.card.info.id}> {item.card.info.name} - {item.card.info.price}</li>
                )}
            </ul>
        </div>

    )


}

export default RestaurantMenu