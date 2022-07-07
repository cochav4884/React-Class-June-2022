import React from "react"
import ReactDOM from "react-dom"

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h4", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div", 
        {},[
            React.createElement("h1", null, "Pet Adoption!"),
            React.createElement(Pet, {
                name: "Luna",
                animal: "Dog",
                breed: "Havanese"
                }),
            React.createElement(Pet, {
                name: "Pepper",
                animal: "Bird",
                bread: "Cockatil"
            }),
            React.createElement(Pet, {
                name: "Bettie",
                animal: "Cat",
                breed: "Domestic Tabby"
            }),
        ]);

};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

