// let myName = "Sandra"
// myName

// let myAge = 24;
// myAge

// let nicName = myName + myAge;
// nicName

// let message = `Hello, ${myName} ,welcome to JavaScript!`
// message

// console.log(message)

// let boys = 5;

// let girls = 11;

// let fullClass = boys + girls;

// let msgClass = `there are ${fullClass} students`

// console.log(msgClass)

// let firstName = "sandra";

// firstName = firstName.toUpperCase();

// console.log(firstName)

// let ln= `sANdra`;
// hj = ln.charAt(0).toUpperCase() + ln.slice(1).toLowerCase();
// console.log(hj)

// function rand (min, max) {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }

// console.log(rand(1,10));



// function die1 (min, max) {
//     return Math.floor(Math.random()*(max-min+1)+min)
// }

// console.log(die1(1,6));

// function die2 (min, max) {
//     return Math.floor(Math.random()*(max-min+1)+min)
// }

// console.log(die2(1,6));

// let dice1= die1(1,6)

// let dice2= die2(1,6)

// console.log (`you have ${dice1} and ${dice2} result is ${dice1 + dice2}`)

// alert("Hello")
// console.log(alert)

const age= prompt ("type your age")
if (age <=9 && age >=1) {
console.log ("entry cost nothing for you")
}
if (age >=60) {
console.log ("entry cost nothing for you")
}
if (age >9 && age <=21) {
    console.log ("entry will cost 10 euro to you")
}
if (age >21 && age <=60) {
    console.log ("entry will cost 20 euro to you")
}
if (age <1) {
    console.log ("wrong age")
}

const nameIs= prompt ("type username")
if (nameIs.length =0) {
    console.log ("no name typed")
}
else if (nameIs.indexOf(' ') !== -1 ) {
    console.log ("can not contain spaces")
}
else if (nameIs.length <3|| nameIs.length >9){
    console.log ("incorect length")
}
else {
    alert (`hello ${nameIs} wellcome`)
}

let nameS = ['Jonas','Petras','Antanas','Tomas'];
console.log
nameS.push('Sandra');
nameS.unshift('VIP');
let price= ((nameS.length) * 15);
console.log (`fully paid ${price} eur`);

let days = ['Pirmadienis','Antradienis','Trečiadienis','Ketvirtadienis','penktadienis','Šeštadienis','Sekmadienis'];
let weekend = days.slice(5);
console.log (weekend);
days [1] = 'Ketvirtadienis'
days [3] = 'Antradienis'
console.log (days)
days.splice(3, 0, 'Naujadienis')
console.log (days)
days.splice(4,1)
console.log (days)