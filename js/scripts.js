var icecreamArray = ["vanilla", "chicken", "avacado", "toothpaste", "mutton", "rainwater", "blueberry", "broccoli", "BBQ", "panda", "muskrat", "iron"];
var flavor = 0;
$(document).ready(function(){
  $("#myList > li").each(function() {
    $(this).text(icecreamArray[flavor]);
    flavor++;
  });
})
