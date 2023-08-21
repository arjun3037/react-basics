import { useState } from "react";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";

const User = (props) =>{
    const[count] = useState(0);

    console.log(count) 

    return (
        <div className="user-card">
            <h2>count : {count} </h2>
            <h2>Name: {props.name}</h2>
            <h3>location : New Delhi</h3>
            <h3>Contact: @arjun3037</h3>
        </div>
    )
}

export default User;