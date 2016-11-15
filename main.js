var yes = "X";

(function() {
    console.log("drawing board");
    var c = document.getElementById("myCanvas");
    var canvas = c.getContext("2d");
    canvas.lineWidth = 1;
    canvas.strokeStyle = "#fff";
    //vertical lines
    canvas.beginPath();
    canvas.moveTo(100, 0);
    canvas.lineTo(100, 146.5);
    canvas.closePath();
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(200, 0);
    canvas.lineTo(200, 146.5);
    canvas.closePath();
    canvas.stroke();

    // horizontal lines
    canvas.lineWidth = .5;

    canvas.beginPath();
    canvas.moveTo(4, 48.5);
    canvas.lineTo(296, 48.5);
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(4, 98.5);
    canvas.lineTo(296, 98.5);
    canvas.closePath();
    canvas.stroke();
  })();


$("i.letter").click(function(){
  if ( $(this).find("span").text() ) {
    return
  }
console.log(yes);
console.log($(this).find("span"));
$(this).find("span").text(yes);
if (yes=="O") {
  yes ="X"
}
else {
  yes="O"
}
});
