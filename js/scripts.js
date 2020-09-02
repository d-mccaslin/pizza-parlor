// Business Logic for ~ Pizza ~
function Pizza(name,Size,toppings) {
  this.name = name,
  this.Size = Size,
  this.toppings = toppings
}

Pizza.prototype.cost = function(sizeCost) {
  //const baseCost = this.Size.baseCost;
  const baseCost = sizeCost;
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
  const selectInput = $("select#pizzaSize");
  sizes.forEach(function(size) {
    selectInput.append("<option value=" + size.baseCost + ">" + size.name + "</option>");
  });


  $("form#pizzaSelection").submit(function() {
    event.preventDefault();
    const pizzaName = $("input#pizzaName").val();
    const pizzaSize = parseInt($("select#pizzaSize").val());\
    console.log(pizzaSize);
    let pizzaToppings = [];
    pizzaToppings.push($("input:radio[name=topping]:checked").val());
    const myPizza = new Pizza(pizzaName,pizzaSize,pizzaToppings);
    console.log(myPizza);
    $("#pizzaCost").text(myPizza.cost(pizzaSize));
    $("#name").text(myPizza.name);
    $("#size").text(myPizza.Size.name);
    $("#toppins").text(myPizza.toppings);
    $("#pizzaResult").show();
  })

});


/* To Do

- update topping BL
- create your own topping?

*/

/* Questions

- parameter/variable names for objects - capitalized?

*/