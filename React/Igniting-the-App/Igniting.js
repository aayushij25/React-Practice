import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child1", key:1},
            [
                React.createElement("h1", {key:1}, "This is Namaste React!"),
                React.createElement("h2", {key:2}, "I'm a h2 tag!")
            ]
        ),
        React.createElement(
            "div",
            {id: "child2", key:2},
            [
                React.createElement("h1", {key:1}, "I'm a h1 tag!"),
                React.createElement("h2", {key:2}, "I'm a h2 tag!")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);