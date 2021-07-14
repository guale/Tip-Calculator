//input be the bill (Arons job)

let Bill = 100;

//number of people at the table (Arons job)

let numPep = 6;

//making an if statement for the number of people

if (numPep > 7){
    Bill * 0.05;
} else {
    Bill * 0;
}

//Tip=Base 10% +(quality of service 1-5)*2 + if guests 5 + 5%
function tip(){
    return Bill * 0.1 + qualityofservice * 0.02 + numPep;
}

//Tip per person = tip/guests
function tipperperson(){
    return tip/numPep;
}

//Arons job
//displaying the tip amount
console.log(
    'The total tip is :\
    $${tip(tip).toFix(2)}'
);

//displaying tip per person
console.log(
    'Each person pays: \
    $$(tipperperson(tipperperson).toFix(2)}'
);