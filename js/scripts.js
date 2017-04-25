$(document).ready(function(){
  $("#castle1").click(function(){
    $("#castle1").toggle();
    $("#castle2").toggle();
  });
  $("#castle2").click(function(){
    $("#castle2").toggle();
    $("#castle3").toggle();
  });
  $("#castle3").click(function(){
    $("#castle3").toggle();
    $("#castle4").toggle();
  });
  $("#castle4").click(function(){
    $("#castle4").toggle();
    $("#castle1").toggle();
  });


});
