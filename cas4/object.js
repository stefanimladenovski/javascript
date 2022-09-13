const person = {
    // object properties (svojstva)
    pol: "maski",
    vozrast: 20,
    visina: 170,
    tezina: 70,
    student: true
}

const nov = {...person} // vaka se kreira kopija od objekt

// key - value 
// menuvanje na properti od objekt
person.pol = 'zenski';
delete person.tezina;
person.ime = 'Stefani' // vaka se dodava properti vo objekt

console.log(person);
console.log(nov);

const keys = Object.keys(person);   // gi vrakja site klucevi od objektot kako array
console.log(keys);

const values = Object.values(person);   // gi vrakja site vrednosti (value) od objektot kako array
console.log(values);

const kvadrat = {
    sirina: 10,
    dolzina: 20,
}
kvadrat.plostina = kvadrat.sirina * kvadrat.dolzina
console.log(kvadrat);


const books = [
    {
      name: 'Crime and punishment',
      author: 'Fyodor Dostoyevsky',
      year: 1887,
      read: true
    },
    {
      name: 'Harry Potter',
      author: 'J.K Rowling',
      year: 2000,
      read: false
    },
    {
      name: 'The art of war',
      author: 'Sun Tzu',
      year: 200,
      read: false
    },
    {
      name: 'The Hobbit',
      author: 'J.R.R Tolkien',
      year: 1910,
      read: true
    }
  ];
  
//   for (let i = 0; i < books.length; i++) { 
//     let book = books[i];

//     if (book.read) console.log(book.name)
// };

  for (let book of books) {
    (book.read) && console.log(book.name);        /// ISTO SO TOA OD GORE SAMO POKRATKA POSTAPKA 
  };


let avgMath = 0
let avgPhysics = 0
let avgChemistry = 0

const students = [
    {
      id: 1,
      name: 'Stefani',
      grades: {
        math: 6,
        physics: 7,
        chemistry: 8
      }
    },
    {
      id: 2,
      name: 'Kristijan',
      grades: {
        math: 9,
        physics: 8,
        chemistry: 10
      }
    },
    {
      id: 3,
      name: 'Riki',
      grades: {
        math: 7,
        physics: 7,
        chemistry: 7
      }
    }
  ]

  for (let student of students) {
    avgMath = student.grades.math + avgMath;
    avgPhysics = student.grades.physics + avgPhysics;
    avgChemistry = student.grades.chemistry + avgChemistry;
  }

  console.log("SREDNA OCENA PO MATEMATIKA E :" + avgMath / students.length)
  console.log("SREDNA OCENA PO FIZIKA E :" + avgPhysics / students.length)
  console.log("SREDNA OCENA PO HEMIJA E :" + avgChemistry / students.length)