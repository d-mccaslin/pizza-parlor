// Business Logic for ~ Pizza ~
function Pizza(name,Size,toppings) {
  this.name = name,
  this.Size = Size,
  this.toppings = toppings
}

Pizza.prototype.cost = function() {
  //const baseCost = this.Size.baseCost;
  const baseCost = 10;
  const toppingCost = this.toppings.length * 2;
  this.cost = baseCost + toppingCost;
  return this.cost;
}

// Business Logic for ~ Size ~
function Size(name,baseCost) {
  this.name = name,
  this.baseCost = baseCost
}

const smallSize = new Size("small",10);
const mediumSize = new Size("medium",15);
const largeSize = new Size("large",20);

let sizes = [];
sizes.push(smallSize);
sizes.push(mediumSize);
sizes.push(largeSize);

// Business Logic for ~ Topping ~

let toppings = ["pepperoni","basil","green peppers"];

/*
function Topping(name,cost) {
  this.name = name,
  this.cost = cost
}
*/


// UI Logic

$(document).ready(function() {
  $("form#pizzaSelection").submit(function() {
    event.preventDefault();
    const pizzaName = $("input#pizzaName").val();
    const pizzaSize = $("select#pizzaSize").val();
    let pizzaToppings = [];
    pizzaToppings.push($("input:radio[name=topping]:checked").val());
    console.log(pizzaName);
    console.log(pizzaSize);
    console.log(pizzaToppings);
    const myPizza = new Pizza(pizzaName,pizzaSize,pizzaToppings);
    console.log(myPizza.cost());
  })

});


/* To Do

- basic ui with results displays
- update topping BL
- create your own topping?

*/

/* Questions

- parameter/variable names for objects - capitalized?

*/