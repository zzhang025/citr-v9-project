import React from "react";
import createRoot from "react-dom";

const Pizza = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "The Pepperoni Pizza"),
    React.createElement("h2", {}, "The Cheese Pizza"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza),
    React.createElement(Pizza),
    React.createElement(Pizza),
    React.createElement("h2", {}, "Dessert"),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
