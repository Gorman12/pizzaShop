function Pizza(size, dough, topping, sauce, cost) {
  this.size = size;
  this.dough = dough;
  this.topping = topping;
  this.sauce = sauce;
}


Pizza.prototype.functionSize = function(input) {
  var size = input;
   this.size = size;
}

Pizza.prototype.functionDough = function(input) {
  var dough = input;
  this.dough = dough;
}

Pizza.prototype.functiontopping = function(input) {
  var topping = input;
  this.topping += topping;
}

Pizza.prototype.functionSauce = function(input) {
  var sauce = input;
  this.sauce = sauce;
}

var pizza = new Pizza(0,0,[],0,0);



$(document).ready(function() {
  $("form#formSize").submit(function(event) {
    event.preventDefault();
    var input = $("input:radio[name=size]:checked").val();
    $(pizza.functionSize(input));
  });
  $("form#formCustomize").submit(function(event) {
    event.preventDefault();
    var dough = $("input:radio[name=dough]:checked").val();
    var toppingArray = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      toppingArray.push($(this).val());
    });
    var sauce = $("input:radio[name=sauce]:checked").val();
    $(pizza.functionDough(dough));
    $(pizza.functiontopping(toppingArray));;
    $(pizza.functionSauce(sauce));
  });
});
