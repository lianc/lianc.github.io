$(document).ready(function() { //always do this first. A special event 
  //append new element 100 times
  for (j = 0; j < 100; j++) { 
    for (i = 0; i < 20; i++) { 
     $("body").append( "<div class='element' style='left:" + i*5
      + "vw; top:" + j*50 + "px;'></div>" );
    console.log("element " + j + ", " + i + " added");
    }
  }

//store random values between 0 to 100, to rx and ry
var rx = Math.floor(Math.random()*100);
var ry = Math.floor(Math.random()*100);
var color = "#000";
if (ry < 50) {
  //ry is smaller than 50
  color = "yellow";
}
else if (rx < 50){
  //square is on the left, below the halfway point
  color = "pink";
}
else if (rx < 75){
  //square on the left, below the half
  color = "orange";
}
else {
  //square is on the right, below halfway point
  color = "#00ccff";
}
console.log("rx: " + rx + " ry: " + ry);
$("body").append( "<div class='element random' style='left:" +
      rx + "vw; top:" + ry + "vh; background-color:" + color + ";'></div>" );


});