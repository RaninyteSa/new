// Tarpinis OOP uždavinys
// Sukurti klasę Vaisius, kuris turi:
// savybę dydis rand 5 - 25;
// savybę id rand 1000000 - 9999999
// savybę prakastas false
// Sukurti metodą prakasti(), kuris savybe prakastas keistų į true.
// Sukurti klasę Krepšys, kuri turi statinę savybe vaisiai, kuri
// yra masyvas.
// Klasėje Krepšys sukurkite statinį metodą pripildyti(),
// kuris savybę vaisiai užpildytų 20-timi Vaisius objektų ir
// išrūšiuotų juos pagal vaisiaus dydį nuo didžiausio iki
// mažiausio.
// Klasėje Krepšys sukurti statinį metodą isimti(), kuris iš
// vaisiai masyvo išimtų (ištrintų iš masyvo) pirmą (didžiausią)
// vaisių ir jį grąžintų. Išėmus tarkim kelis vaisius ir vėl
// paleidus metodą papildyti(), jis turi padaryti tai ką sako
// metodo pavadinimas- papildyti iki pilno (20 elementų), o ne
// perrašyti visus vaisius iš naujo (tai galima stebėti pagal
// vaisių id).
// Išorėje (globale) sukurti kintamąjį grauztukai kuris yra Map
// tipo objektas. Iš krepšelio išimti vaisiai turi būti pridedami į
// šį objektą. Kaip raiktus naudoti Vaisius objekto id savybę.
// Prieš patalpinant vaisių į grauztukai objektą, vaisius turi būti
// “prakąstas”, Vaisius objekte paleidžiant prakasti() metodą.

const grauztukai = new Map();

class Vaisiai {

  constructor() {

    this.dydis = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
    this.id = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
    this.prakastas = false;
  }
  setPrakasti(prakastas) {

    this.prakasti = prakastas;
  }
  getPrakastas() {

    this.prakastas = true;

    return this;
  }
}

class Krepsys {

  static vaisiai = [];

  static pripildyti() {
    for (let i = 1; i <= 20; i++) {
      this.vaisiai.push(new Vaisiai());
      this.vaisiai.sort((x, y) => x.dydis - y.dydis);
    }
    return this;

  }
  static isimti() {
    let isimtas = Krepsys.vaisiai.shift();
    isimtas.getPrakastas();
    grauztukai.set(isimtas.id, isimtas);

    return this;
  }
}

Krepsys.pripildyti();
console.log(Krepsys);
Krepsys.isimti();
Krepsys.isimti();
Krepsys.isimti();
Krepsys.isimti();
console.log(Krepsys);
console.log(grauztukai);
Krepsys.pripildyti();
console.log(Krepsys);
console.log(grauztukai);
