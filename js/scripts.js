// Business Logic for Pizza
function Pizza(Size,toppings) {
  this.Size = Size,
  this.topping = toppings
}

Pizza.prototype.cost = function() {
  //let baseCost;
  /*
  const size = this.size;
  if (size == "small") {
    baseCost = 10;
  } else if (size == "medium") {
    baseCost = 15;
  } else if (size == "large") {
    baseCost = 20;
  }
  */
  const baseCost = this.Size.baseCost;
  console.log(baseCost);
  const toppingCost = this.toppings.length * 2;
  console.log(toppingCost);
  this.cost = baseCost + toppingCost;
}

// Business Logic for Size
function Size(name,baseCost) {
  this.name = name,
  this.baseCost = baseCost,
}

const smallSize = new Size("small",10);
const mediumSize = new Size("medium",15);
const largeSize = new Size("large",20);


