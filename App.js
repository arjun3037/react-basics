import React  from "react";
import ReactDOM from "react-dom/client" 

// React Element
const heading = React.createElement("h1",{id:"heading"},"React Basics");

const root = ReactDOM.createRoot(document.getElementById("root"));

//const jsxHeading = <h1 id="heading">React Basics Using JSX</h1>

const TitleCompnent = () => { return <h1 className="heading"> React Functional Title</h1>}

const el = <h1>Another element</h1>

const reactElement = <h1>React Element ---  {el}</h1>
const number = 1000;

// component composition
const HeadingComponent = () => (
    <div id = "container">
        <h1 className="heading">React Basic Fucntional Component 1</h1>
    </div>
);


root.render(reactElement);
root.render(<HeadingComponent/>);
