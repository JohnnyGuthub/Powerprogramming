setInterval(changeColor, 10);

var color = "rgb(0,0,0)";
var counter = 0;
var red = 0;
var green= 0;
var blue = 0;

function changeColor()
{
	if(color === "rgb(255,255,255)"){
		red = 0;
		green = 0;
		blue = 0;
		return;
	}
	color = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")";
	document.body.style.backgroundColor = color;
	if(red < 255){
		red++;
		return;
	}
	else if(green < 255){
		green++;
		return;
	}
	else{
		blue++;
	}
}