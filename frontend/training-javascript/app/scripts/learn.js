
// create variable type number
// var x = 5 * 5;
// The Environment
//Function
// Math.max(4, 8);
// Math.min(2, 4) + 100;

//to show a little dialog box with message
// alert("Wellcome you train Javascript");

// confirm("Please, hepl me...");
// prompt("Tell for me know you need ...?");

//print function

// print("X");


// var theNumber = Number(prompt("Pick a number", ""));
// if (!isNaN(theNumber))
// 	alert("Your number is the square root of " + (theNumber *theNumber));

// if (true == false)
// 	alert("How confusing!");
// else
// 	alert("True still isn't false.");
var currentNumber = 0;
	while (currentNumber <= 12) {
		document.write(currentNumber, "\n");
		currentNumber = currentNumber + 2;
	}

var result = 1;
var counter = 0;
	while (counter < 10) {
		result = result*2;
		counter = counter + 1;
	}
document.write("<h2> Get a variable <h2>");
var currentNumber = counter;
while (currentNumber <= 12) {
	document.write(currentNumber, "\n");
	currentNumber = currentNumber + 2;
}
document.write("<h2>Function</h2>", "\n");

function square(x) {
return x*x;
}

document.write(square(4));