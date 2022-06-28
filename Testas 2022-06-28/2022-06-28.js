'use strict';
//uzduotis 1
// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, 
// gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą,
//  kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas
//   vardo ir pavardės kintamuosius atspausdintų tokį sakinį 
//   : "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

const myName= 'Sandra';
const myLastName= 'Rainytė';
const birthYear= 1998;


function calcAge (birthYear, currentYear) {
    return currentYear - birthYear
};
let age = calcAge(birthYear, 2022);
// console.log(age);

const message = ` Aš esu ${myName} ${myLastName}. Man yra ${age} metai.`
console.log(message);

msg.append(message);

//uzduotis 2
// Sugeneruokite 6 kintamuosius kurių reikšmės būtų atsitiktiniai
//  skaičiai nuo 1000 iki 9999. Atspausdinkite reikšmes viename strige,
//   išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. 
//   Naudoti ciklų ir masyvų NEGALIMA.

function rand(min,max) {
    return Math.floor(Math.random()*
    (max - min + 1)+min);
}

let num1 = rand(1000,9999);
let num2 = rand(1000,9999);
let num3 = rand(1000,9999);
let num4 = rand(1000,9999);
let num5 = rand(1000,9999);
let num6 = rand(1000,9999);

const numMessage = new String (`${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6} `);
console.log(numMessage);

num.append(numMessage);

//uzduotis 3
// Parašykite funkciją, kuri priimtų du parametrus ‘exclude’ ir ‘length’. 
// Funcija turi sugeneruoti atsitiktinį stringą iš lotyniškų didžiūjų raidžių.
//  Stringo ilgis nurodomas antru perduodamu parametru. Pirmuoju parametru palikite 
//  galimybę į funkciją perduoti simbolius kurių sugeneruotame stringe neturėtų būti. 
//  Aprašykite funkciją taip, kad ją iššaukinėjant, būtų privaloma nurodyti tik generuojamo stringo ilgį ().


const random = (length = 8) => {

    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return new String(str) ;

};

console.log(random()); 
const result = (random(12)); 

randLetter.append(result);

// uzduotis 4

// Sugeneruokite masyvą, kurio reikšmės atsitiktinės
//  raidės A, B, C ir D, o ilgis 200.
//  Suskaičiuokite kiek yra kiekvienos raidės.

const randomArr = (length = 200) => {

const letters = 'ABCD';
let arr = [];
for (let i = 0; i < length; i++) {
    arr += letters.charAt(Math.floor(Math.random()* letters.length));
}
    return new Array(arr);
}

const randArr = (randomArr(200));
console.log(randArr);

arr.append(randArr);

//uzduotis 5
//Išrūšiuokite 4 uždavinio masyvą pagal abecėlę.

//uzduotis 6
//Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai-  
// atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. 
// Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.

function randNums (min, max) {
    return Math.floor(Math.random()*
    (max - min + 1) +min)
}
const randomNumber = randNums(5 ,25);
console.log(randNums(5 ,25));
const numm1 = randNums(5 ,25);
const numm2 = randomNumber;
const numm3 = numm1 + numm2;
const numm4 = numm2 + numm3;
const numm5 = numm3 + numm4;
const numm6 = numm4 + numm5;
const numm7 = numm5 + numm6;
const numm8 = numm6 + numm7;
const numm9 = numm7 + numm8;
const numm10 = numm8 + numm9;

const arrNum = new Array (`${numm1}, ${numm2}, ${numm3}, ${numm4}, ${numm5}, ${numm6}, ${numm7}, ${numm8}, ${numm9}, ${numm10}`);
console.log(arrNum);

randomNums.append(arrNum);