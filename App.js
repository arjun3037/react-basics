import React  from "react";
import ReactDOM from "react-dom/client" 

// React Element
const heading = React.createElement("h1",{id:"heading"},"React Basics");

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = <h1 id="heading">React Basics Using JSX</h1>

const HeadingComponent = () =>{
    return <h1 className="heading">React Basic Fucntional Component</h1>
}

const HeadingComponent1 = () => <h1 className="heading"> React Functional Component</h1>

root.render(jsxHeading);