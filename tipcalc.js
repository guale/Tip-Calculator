//input be the bill (Arons job)

let bill = 300;

//number of people at the table (Arons job)

let numPep = 7;

//quality

let quality = 6;

//ppl

let largeParty = 0;

//making an if statement for the number of people

if (numPep >= 7){
    largeParty = (bill * 0.05);
}

//Tip=Base 10% +(quality of service 1-5)*2 + if guests 5 + 5%
function tipTotal(bill){
    return Math.round(((bill * 0.1) + (bill * (quality * 0.02)) + largeParty)*100)/100;
}

//tip stuff  
let tip = tipTotal(bill);

//Tip per person = tip/guests
function tipPerPerson(){
    return Math.round(tip/numPep*100)/100;
}

let tipEach = tipPerPerson();

console.log(tip);
console.log(tipEach);