import React from "react";
import ReactDOM from "react-dom/client";

/** REACT ELEMENT */
// React.createElement => ReactElement - JS Object => HTMLElement(render)

// React element written using core React
const heading = React.createElement("h1", {id: "heading"}, "Namaste React!");
console.log(heading);

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
// JSX = HTML-like  or XML-like syntax
// JSX (transpiled before it reaches JS) - PARCEL + Babel
// React element written using JSX
const elem = <div>React element inside another React Element</div>
const NewComponent = () => (
    <div>Function component inside a React Element</div>
);
const jsxHeading = (
    <h1 id="heading" className="head">
        {/* element inside another element */}
        {elem}

        {/* Component inside an element */}
        <NewComponent />

        React Element inside a Functional Component
    </h1>
);
console.log(jsxHeading);

const data = 1000;

/** REACT COMPONENT */
// Class based components - OLD
// Functional components - NEW

// React Functional Component
const HeadingComponent = function() {
    return <h1 className="head">Functional Component inside another Functional Component</h1>
}
// (or)
const HeadingComponent2 = () => (
    <div id="container">
        {data}

        {/* element inside a component */}
        {jsxHeading} 

        {/* One component inside another - Component Composition */}
        <HeadingComponent /> 
        {/* OR it can be written as */}
        {HeadingComponent()}
        {/* OR */}
        <HeadingComponent></HeadingComponent>

        <h1 className="head">Hello World Functional Component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// Functional Component rendering
root.render(<HeadingComponent2 />);