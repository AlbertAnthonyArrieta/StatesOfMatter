$( document ).ready(function() {
    $("#sP").show();
    $("#lP").hide();
    $("#gP").hide();
});

function solidP() {
    $("#sP").show();
    $("#lP").hide();
    $("#gP").hide();
}

function liquidP(){
  $("#lP").show();
  $("#sP").hide();
  $("#gP").hide();
}

function gasP(){
  $("#gP").show();
  $("#lP").hide();
  $("#sP").hide();
}