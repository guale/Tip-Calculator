//Define each field from the page as a variable

let billEntry = document.querySelector("#bill");
let numPepEntry = document.querySelector("#guest");
let qualityEntry = document.querySelector("#quality");
let tipOutput = document.querySelector("#tipTotal");
let tipEachOutput = document.querySelector("#tip");

//Initialize output variables

let tip = 0;
let tipEach = 0;

//Define each button on the page

let calcBtn = document.querySelector("#calculate");
let clearBtn = document.querySelector("#clear");

//When the calculate button is clicked the appropriate values for total tip and tip per person are calculated and filled into the page. If either Total Bill or Number of Guests is an empty string an alert prompts the user to fill them with a numerical value

calcBtn.addEventListener("click", calculate);

function calculate() {
	bill = billEntry.value;
	numPep = numPepEntry.value;
	quality = qualityEntry.value;

	if (bill === "" || numPep === "") {
		alert("Please provide a numerical value for all fields");
	} else {
		tip = tipTotal();

		tipEach = tipPerPerson();

		tipEachOutput.innerText = "$" + tipEach;
		tipOutput.innerText = "$" + tip;
	}
}

//When the clear button is pressed all fields are replaced with an empty string

clearBtn.addEventListener("click", clear);

function clear() {
	billEntry.value = "";
	numPepEntry.value = "";
	qualityEntry.value = "3";

	tipOutput.innerText = "";
	tipEachOutput.innerText = "";
}
