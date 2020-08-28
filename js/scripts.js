// Business Logic for ~ Pizza ~
function Pizza(Size,toppings) {
  this.Size = Size,
  this.toppings = toppings
}

Pizza.prototype.cost = function() {
  const baseCost = this.Size.baseCost;
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

// Tests

let myPizza = new Pizza(smallSize, toppings);
console.log(myPizza);
myPizza.cost();


/* To Do

- basic ui with results displays
- update topping BL
- create your own topping?

*/

/* Questions

- parameter/variable names for objects - capitalized?

*/