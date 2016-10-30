function Pizza(size, dough, topping, sauce, cost) {
  this.size = size;
  this.dough = dough;
  this.topping = topping;
  this.sauce = sauce;
}

Pizza.prototype.small = function() {
  this.size = "small";
}

Pizza.prototype.medium = function() {
   this.size = "medium";
}

Pizza.prototype.large = function() {
   this.size = "large";
}

var pizza = new Pizza("","",[],"",0);



$(document).ready(function() {
  $("form#formSize").submit(function() {
    var size = $("input:radio[name=size]:checked").val();
    if (size === "small") {
      pizza.small();
      alert(pizza.size)
    }else if (size === "medium") {
      pizza.medium();
      alert(pizza.size)
    }else if (size === "large") {
      pizza.large();
      alert(pizza.size);
    } else {
      alert("please enter a size.")
    }
  });
});
