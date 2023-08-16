import React from "react";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component {

    constructor(props){
        super(props);
        console.log("parent constructor")
    }
    

    componentDidMount(){
        console.log("Parent componentDidMount called");
    }

    componentDidUpdate(){
        console.log("Parent componentDidUpdate called");
    }

    componentDidCatch(){
        console.log("Parent componentDidCatch called");
    }

    componentWillUnmount(){
        console.log("Parent componentWillUnmount called");
    }


    componentDidCatch(){
        console.log("Parent componentDidCatch called");
    }



    render(){
        console.log("PArent render function called")
        return (
            <div>
                <h1>About Class based </h1>
                <h2>This is about the React learning</h2>
                <UserClass name={"Arjun Sing(Class)"} location = {"New Delhi"} contact={"@arjun3035"}/>
            </div>
        );
    }
    
}


export default About;