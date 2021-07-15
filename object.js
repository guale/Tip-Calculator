//Initialize a varaible used to modify the total tip in case of a large party and define said limit

let largeParty = 0;
const PARTY_SIZE = 7;


let tip = {

	
	//Initialize varaibles to be used in the later functions
	bill: 0,
	numPep: 0,
	quality: 0,
	tip: 0,
	tipEach: 0,

	//Calculates the tip with a base of 10%, adding 2% - 12% based on the quality of the service, and adds an additional 5% for large groups
	tipTotal() {
		return (
			Math.round(
				(this.bill * 0.1 +
					this.bill * (this.quality * 0.02) +
					largeParty) *
					100
			) / 100
		);
	},

	// Divides the total tip by the number of people
	tipPerPerson() {
		return Math.round((this.tip / this.numPep) * 100) / 100;
	},
};
