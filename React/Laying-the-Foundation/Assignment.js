import React from "react";
import ReactDOM from "react-dom/client";
import './foundation.css';

/** Assigment Q1 */
// Using React.createElement
const nestedEle = React.createElement(
    "div",
    {className: "title"},
    [
        React.createElement("h1", {key:1}, "I'm a h1 element"),
        React.createElement("h2", {key:2}, "I'm a h2 element"),
        React.createElement("h3", {key:3}, "I'm a h3 element")
    ]
)

// Using JSX
const jsxNestedEle = (
    <div className="title">
        <h1>I'm a h1 element from JSX</h1>
        <h2>I'm a h2 element from JSX</h2>
        <h3>I'm a h3 element from JSX</h3>
    </div>
);

// A functional component + adding attributes in tags
const FuncCompNestedEle = () => (
    <div className="title">
        <h1 className="head1">I'm a h1 element from Function Component</h1>
        <h2 className="head2">I'm a h2 element from Function Component</h2>
        <h3 className="head3">I'm a h3 element from Function Component</h3>
    </div>
);

// Composition of Component
const Title = () => (
    <div className="newTitle">
        <FuncCompNestedEle />
        Component Composition
    </div>
)

/** Assigment Q2 */
// Header Component using functional component
const Header = () => (
    <div className="container">
        <div className="logo">Logo</div>
        <input className="text" type="text" placeholder="Search here" />
        <div className="user-icon">
            <div className="head"></div>
            <div className="body"></div>
        </div>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);