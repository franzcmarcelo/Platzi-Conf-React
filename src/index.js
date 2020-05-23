import React from "react";
import ReactDOM from "react-dom";

// React ~> createElement
// ReactDOM ~> appendchild

const container = document.getElementById("app");

// Con React
const jsx = (
  <div>
    <h1>Hola, soy Richard</h1>
    <p>Soy ingeniero frontend.</p>
  </div>
);

// Con createElement
const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Richard"),
  React.createElement("p", {}, "Soy ingeniero de la web.")
);

// FIXME:
// Con React DOM
// ReactDOM.render(__qué__, __dónde__);
// Funcionan igual los dos
// 1.
ReactDOM.render(jsx, container);
// 2.
ReactDOM.render(element, container);

// Con appendChild
const child = document.createElement("h1");
child.innerText = "Hello Iam child";
// 3.
container.appendChild(child);
