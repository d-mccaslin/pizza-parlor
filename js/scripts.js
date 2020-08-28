// Constructor for Pizza
function Pizza(size,toppings) {
  this.size = size,
  this.topping = toppings,
}

Pizza.prototype.price = function() {
  let baseCost;
  const size = this.size;
  if (size == "small") {
    baseCost = 10;
  } else if (size == "medium") {
    baseCost = 15;
  } else if (size == "large") {
    baseCost = 20;
  }
  const toppingCost = this.toppings.length;
  this.price = baseCost + toppingCost;
}

// Constructor for Size
function Size(name,baseCost) {
  this.name = name,
  this.baseCost = baseCost,
}