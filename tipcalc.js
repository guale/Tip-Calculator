//Initialize a varaible used to modify the total tip in case of a large party and define said limit

let largeParty = 0;
const PARTY_SIZE = 7;

//Initialize varaibles to be used in the later functions

let bill = 0;
let numPep = 0;
let quality = 0;

//Adds an extra 5% gratuity for large parties

if (numPep >= PARTY_SIZE) {
	largeParty = bill * 0.05;
}

//Calculates the tip with a base of 10%, adding 2% - 12% based on the quality of the service, and adds an additional 5% for large groups
function tipTotal() {
	return (
		Math.round((bill * 0.1 + bill * (quality * 0.02) + largeParty) * 100) /
		100
	);
}

// Divides the total tip by the number of people
function tipPerPerson() {
	return Math.round((tip / numPep) * 100) / 100;
}
