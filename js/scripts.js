// Business Logic for ~ Pizza ~
function Pizza(name,Size,toppings) {
  this.name = name,
  this.Size = Size,
  this.toppings = toppings
}

Pizza.prototype.cost = function(sizeCost) {
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

function initializeSizes() {
  const smallSize = new Size("small",10);
  const mediumSize = new Size("medium",15);
  const largeSize = new Size("large",20);

  let sizes = [];
  sizes.push(smallSize);
  sizes.push(mediumSize);
  sizes.push(largeSize);
  return sizes;
}

// UI Logic

$(document).ready(function() {
  const sizes = initializeSizes();
  const selectInput = $("select#pizzaSize");
  sizes.forEach(function(size) {
    selectInput.append("<option value=" + size.baseCost + ">" + size.name + "</option>");
  });

  $("form#pizzaSelection").submit(function() {
    event.preventDefault();
    const pizzaName = $("input#pizzaName").val();
    const pizzaSize = parseInt($("select#pizzaSize").val());
    let pizzaToppings = [];
    pizzaToppings.push($("input:radio[name=topping]:checked").val());
    const myPizza = new Pizza(pizzaName,pizzaSize,pizzaToppings);
    $("#pizzaCost").text(myPizza.cost(pizzaSize));
    $("#name").text(myPizza.name);
    $("#size").text(myPizza.Size.name);
    $("#toppins").text(myPizza.toppings);
    $("#pizzaResult").show();
  })

});