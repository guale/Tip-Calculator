//Define each field from the page as a variable

let billEntry = document.querySelector("#bill");
let numPepEntry = document.querySelector("#guest");
let qualityEntry = document.querySelector("#quality");
let tipOutput = document.querySelector("#tipTotal");
let tipEachOutput = document.querySelector("#tip");

//Initialize output variables

// let tip = 0;
// let tipEach = 0;

//Define each button on the page

let calcBtn = document.querySelector("#calculate");
let clearBtn = document.querySelector("#clear");

//When the calculate button is clicked the appropriate values for total tip and tip per person are calculated and filled into the page. If either Total Bill or Number of Guests is an empty string an alert prompts the user to fill them with a numerical value

calcBtn.addEventListener("click", calculate);


//Formats input to proper USD with two decimal places
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

function calculate() {
	tip.bill = billEntry.value;
	tip.numPep = numPepEntry.value;
	tip.quality = qualityEntry.value;

	//Adds an extra 5% gratuity for large parties

	if (tip.numPep >= PARTY_SIZE) {
		largeParty = tip.bill * 0.05;
	} else{
		largeParty = 0;
	}

	if (tip.bill === "" || tip.numPep === "") {
		alert("Please provide a numerical value for all fields.");
	} else if(tip.numPep == 0){
		alert("Number of Guests cannot be 0.")
	}	else {
		tip.tip = tip.tipTotal();

		tip.tipEach = tip.tipPerPerson();

		//Formats the output to USD
		tipEachOutput.innerText = formatter.format(tip.tipEach);
		tipOutput.innerText = formatter.format(tip.tip);
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
