// deklaracija ili definicija na promenliva + zadavanje na vrednost na taa promenliva
var greeting = 'Hello Semos Academy'; // string (text)

//var promenlivata e vidliva sekade niz fajlot i moze da se koristi i menuva nejzinata vrednost (retko se koristi, mozno e da izleze od upotreba)

// definicija na promenliva, a potoa so nejzinoto ime dodeluvame vrednost
let imeIPrezime   

//let promenlivata e vidliva samo vo prostorot ( primer vo odredeni zagradi (funkcija)) kaj so se naogja, istoto ime na promenlivata so let moze da se koristi i na drugo mesto vo drugi zagradi.
imeIPrezime = 'Stefani Nelkovska';

//definicija na promenliva odnosno konstanta
const godinaNaRagjanje = 2001; // number (broj)

//const promenlivata, nejzinata vrednost ne moze da se smeni. No dokolku constantata e objekt ili niza parametrite vnatre moze da se menuvaat
console.log(greeting, imeIPrezime, godinaNaRagjanje);

//postojat i console.warn, console.error

//menuvanje na vrednosta na promenlivata
greeting = 'Hi my dear friends';

const polnoleten = true; //logicki promenlivi - boolean

//postojat i vrednosti na promenlivi od nevaliden tip / faulty values tie se : ' undefined, null, NaN, false, 0 i drugi....

let test;
console.error(test);


let a = 8, b = 4, c = a + b;

b = b + 2;
b += 2;
b++; // ili b += 1 (ke se zgolemi za 1)

console.log(c, a - b, a / b, a*b, a % b)  
// % e modulo operator odnosno ostatok pri celobrojno delenje

let ime = 'Stefani';
let prezime = 'Nelkovska';
console.log(ime + ' ' + prezime);

// moze da se sobiraat 2 stringovi ili string i number

console.log('test' + 5);