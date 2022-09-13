//      VEZBA --- 1
//  Da se vnesat 10 prijateli vo prazna niza so prompt i otkako ke se vnesat da se ispecatat
// const friends = [];

// // i = iterator
// for (let i = 0; i < 3; i++) {
//     const ime = prompt("VNESI IME:");
//     friends.push(ime);
// };

// for (let index = 0; index < friends.length; index++) {
//     // console.log("MY FRIEND : "+ friends[index] );
//     console.log(`MY FRIEND : ${friends[index]}`);
// };


//    VEZBA --- 2
// Na dadena niza od elementi, elementite da se ispecatat vo obraten redosled
const niza = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // primer da se ispecati 4, 3, 2, 1

for (let index = niza.length - 1; index >= 0; index--) {
    console.log(niza[index]);
};

// console.log(niza.reverse()); //pokratok i polesan nacin


//      VEZBA --- 3
// Na dadena niza od dnevni temperaturi da se najde prosecna temperatura za dadenite denovi

const temp = [12, 15, 14, 20, 22, 30];

let sum = 0;

for (let i = 0; i < temp.length; i++) {
    sum += temp[i]
}
// if (!temp.length) console.log(0);
// else console.log(sum / temp.length);

console.log(!temp.length ? 0 : sum / temp.length)  // pokratok nacin (ako nizata temp e prazna da se ispise 0, ako ima nesto vo nea da se podeli so vkupniot broj na elementi)

//        VEZBA --- 4
//  Ima valkana niza koja sodrzi razlicni tipovi na elemnti, vklucuvajki i nedefinirani vrednosti(null, undefined, ''....)
// Da se kreira nova niza kade sto ke se smestat samo validnite vrednosti
// primer: valkanaNiza = [1, "test", null, 2, 4, undefined] ====> chistaNiza = [1, "test", 2, 4]
// Na kraj, novata niza da se ispechati

const valkanaNiza = [1, "test", null, 2, 5, undefined];
const chistaNiza = [];

for (let i = 0; i < valkanaNiza.length; i++) {
    const el = valkanaNiza[i];
    if (el) {
        chistaNiza.push(el)
    }
}

console.log(chistaNiza)