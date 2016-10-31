function Pizza(size, dough, topping, sauce, cost) {
  this.size = size;
  this.dough = dough;
  this.topping = topping;
  this.sauce = sauce;
  this.cost = cost;
}

Pizza.prototype.functionSize = function(input) {
  var Size = input;
   this.size = Size;
}

Pizza.prototype.functionDough = function(input) {
  var Dough = input;
  this.dough = Dough;
}

Pizza.prototype.functionTopping = function(input) {
  var Topping = input;
  this.topping = Topping;
}

Pizza.prototype.functionSauce = function(input) {
  var Sauce = input;
  this.sauce = Sauce;
}

Pizza.prototype.functionSizeCost = function() {
  var Size = this.size;
  if (Size === "small") {
    this.cost = 6;
  } else if (Size === "medium") {
    this.cost = 8;
  } else if (Size === "large") {
    this.cost = 10;
  }
}

Pizza.prototype.functionDoughCost = function() {
  var doughCost = this.dough;
  if (doughCost === "artisan") {
    this.cost += 1;
  }
}

Pizza.prototype.functionToppingCost = function() {
  var i;
  var array = this.topping;
  for (i = 0; i < array.length; i++) {
    var j = array[i];
    if (j === "steak") {
      this.cost += 5;
    } else if ((j === "pork") || (j === "chicken") || (j === "bacon") || (j === "peperoni")) {
      this.cost += 3;
    } else if ((j === "olive") || (j === "pepper") || (j === "onion") || (j === "broccoli") || (j === "kale")) {
      this.cost += 1;
    }
  }
}

// Pizza.prototype.functionDisplayTopping = function() {
//   var i;
//   var array = this.topping;
//   for (i = 0; i < array.length; i++) {
//     var j = array[i];
//     return j + ", ";
// }


var pizza = new Pizza("","",[],"",0);
var toppingArray = [];


/////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function() {
  $("#welcomeScreen").show();
  $("#button1").click(function(event) {
    event.preventDefault();
    $("#welcomeScreen").hide();
    $("#sizeScreen").show();
  })
  $("form#formSize").submit(function(event) {
    event.preventDefault();
    var input = $("input:radio[name=size]:checked").val();
    $(pizza.functionSize(input));
    $("#sizeScreen").hide();
    $("#customizeScreen").show();
  });
  $("form#formCustomize").submit(function(event) {
    event.preventDefault();
    var dough = $("input:radio[name=dough]:checked").val();
    $("input:checkbox[name=topping]:checked").each(function() {
      toppingArray.push($(this).val());
    });
    var sauce = $("input:radio[name=sauce]:checked").val();
    $(pizza.functionDough(dough));
    $(pizza.functionTopping(toppingArray));
    $(pizza.functionSauce(sauce));
    $(pizza.functionSizeCost());
    $(pizza.functionDoughCost());
    $(pizza.functionToppingCost());
    $("#customizeScreen").hide();
    $("#review").show();
    $("#reviewSize").append(pizza.size);
    $("#reviewDough").append(pizza.dough);
    $("#reviewToppings").append(pizza.topping.join(", "));
    $("#reviewSauce").append(pizza.sauce);
    $("#reviewCost").append(pizza.cost);
  });

  $("#button2").click(function() {
    $("#review").hide();
    $("#thankYou").show();
  })
});
