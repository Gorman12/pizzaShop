function Pizza(size, dough, topping, sauce, cost) {
  this.size = size;
  this.dough = dough;
  this.topping = topping;
  this.sauce = sauce;
}

Pizza.prototype.cost = function() {
  
}


var pizza = new Pizza();
