//ARRAYS - NIZI
//redosledot na elementite vo nizata e fiksen i sekoj si ima svoja pozicija ili index

let animals = ['Cat', 'Dog', 'Parrot', 'Rabbit'];
            // i=0    i=1     i=2        i=3

            //na X elementi - posledniot index ke bide X-1
console.log(animals[1]);

const friends = [
    "Stefani",  //0
    "Kristijan",  //1
    "Ane",  //2
    "Riki", //3
    "Kosta", //4
    "Bela", //5
    "Mateja",  //6
];

friends[2] = "Nesto drugo";

for (let index = 0; index < friends.length; index++) {
    console.log(friends[index]);
};

friends.push("Mila");   //  .push dodava nov element na krajot na nizata
friends.unshift("Stavre");   //  .unshift dodava nov element na pocetok na nizata

const izbrisan = friends.pop();  //  go brise posledniot element od nizata i go vrakja vo promenliva
const izbrisan2 = friends.shift(); // go brise prviot element od nizata i go vrakja vo promenliva

console.log(izbrisan, izbrisan2)
console.log(friends)

console.log(friends.concat(animals))

