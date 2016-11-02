function Pizza(size, dough, topping, sauce, cost) {
  this.size = size;
  this.dough = dough;
  this.topping = topping;
  this.sauce = sauce;
  this.cost = cost;
}


Pizza.prototype.sizeCost = function() {
  if (this.size === "small") {
    this.cost = 6;
  } else if (this.size === "medium") {
    this.cost = 8;
  } else if (this.size === "large") {
    this.cost = 10;
  }
}

Pizza.prototype.doughCost = function() {
  if (this.dough === "artisan") {
    this.cost += 1;
  }
}

Pizza.prototype.toppingCost = function() {
  var i;
  var array = this.topping;
  for (i = 0; i < array.length; i++) {
    var j = array[i];
    if (j === "steak") {
      this.cost += 5;
    } else if ((j === "pork") || (j === "chicken") || (j === "bacon") || (j === "pepperoni")) {
      this.cost += 3;
    } else if ((j === "olive") || (j === "pepper") || (j === "onion") || (j === "broccoli") || (j === "kale")) {
      this.cost += 1;
    }
  }
}


/////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function() {
  $("#welcomeScreen").show();
  $("#button1").click(function(event) {
    event.preventDefault();
    $("#welcomeScreen").hide();
    $("#sizeScreen").show();
  });

  var pizza = new Pizza("","",[],"",0);
  var toppingArray = [];

  $("form#formSize").submit(function(event) {
    event.preventDefault();
    var input = $("input:radio[name=size]:checked").val();
    (pizza.size = input);
    $("#sizeScreen").hide();
    $("#customizeScreen").show();
  });
  $("form#formCustomize").submit(function(event) {
    event.preventDefault();
    pizza.dough = $("input:radio[name=dough]:checked").val();
    $("input:checkbox[name=topping]:checked").each(function() {
      pizza.topping.push($(this).val());
    });
    pizza.sauce = $("input:radio[name=sauce]:checked").val();
    (pizza.sizeCost());
    (pizza.doughCost());
    (pizza.toppingCost());
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
  });
});
