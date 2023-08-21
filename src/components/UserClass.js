import React from "react"

class UserClass extends React.Component{


    constructor(props){
        super(props);
        console.log(this.props.name + "Child constructor")
        this.state = {
            count : 0,
            
        }
        console.log(props)
    }

    componentDidMount(){
        console.log(this.props.name  + "Child componentDidMount called");
    }

    

    render(){
        
        console.log(this.props.name + "Child render function called")

        const{name,location,contact} = this.props;
        const{count} = this.state;

        return (
            <div className="user-card">
                <h2>Count : {count}</h2>
                <button onClick={() => {
                    // Never update state variables directly.
                    // this.state.count = this .state.count+1;
                    this.setState({
                        // it will update count from state object ,it will not touch 
                        //or alter other variables of state object
                        count:this.state.count+1
                    })

                }}>Count Increase</button>
                <h2>Name: {name}</h2>
                <h3>location : {location}</h3>
                <h3>Contact: {contact}</h3>
            </div>
        )
    }



}

export default UserClass;