$( document ).ready(function() {
  gasP();
});

function solidP() {
  $("#sP").show();
  $("#lP").hide();
  $("#gP").hide();
  $("#cP").hide();
}

function liquidP(){
  $("#lP").show();
  $("#sP").hide();
  $("#gP").hide();
  $("#cP").hide();
}

function gasP(){
  $("#gP").show();
  $("#lP").hide();
  $("#sP").hide();
  $("#cP").hide();
}

function citationsP(){
  $("#gP").hide();
  $("#lP").hide();
  $("#sP").hide();
  $("#cP").show();
}
