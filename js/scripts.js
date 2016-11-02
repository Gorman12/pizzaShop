function Pizza(size, dough, topping, sauce, cost) {
  this.size = size;
  this.dough = dough;
  this.topping = topping;
  this.sauce = sauce;
  this.cost = cost;
}


Pizza.prototype.sizeCost = function() {
  var size = this.size;
  if (size === "small") {
    this.cost = 6;
  } else if (size === "medium") {
    this.cost = 8;
  } else if (size === "large") {
    this.cost = 10;
  }
}

Pizza.prototype.doughCost = function() {
  var doughCost = this.dough;
  if (doughCost === "artisan") {
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
    } else if ((j === "pork") || (j === "chicken") || (j === "bacon") || (j === "peperoni")) {
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
  })

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
    var dough = $("input:radio[name=dough]:checked").val();
    (pizza.dough = dough);
    $("input:checkbox[name=topping]:checked").each(function() {
      toppingArray.push($(this).val());
    });
    (pizza.topping = toppingArray);
    var sauce = $("input:radio[name=sauce]:checked").val();
    (pizza.sauce = sauce);
    (pizza.sizeizeCost());
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
