/// STORAGE --- mehanizam za zacuvuvanje na podatoci

localStorage.setItem('ime', 'Stefani');
const ime = localStorage.getItem('ime'); // ke vrati "Stefani"
console.log(ime)

// localStorage.removeItem('ime');  
// localStorage.clear()


//  javascript object notation
const book = {
    name: 'Crime and punishment',
    author: 'Fyodor Dostoyevsky',
    year: 1887,
    read: true
};

const bookAsJson = JSON.stringify([book]);
console.log(book);
console.log(bookAsJson);

localStorage.setItem('book', bookAsJson)
//alert(bookAsJson);

const addAnimals = () => {
    const animalType = document.getElementById('animalType');
    const numOfAnimal = document.getElementById('numOfAnimal');

    // guard clause
    if (!animalType.value || !numOfAnimal.value) {
        alert("Please insert the animal type and the number of specimens");
        return
    }

    // make a new animal object to be inserted in the local storage 
    const newAnimal = {
        type: animalType.value.toLowerCase(),
        number: numOfAnimal.value
    }

    // check if the animal array exists (when the app is loaded for the first time, the list does NOT exist)
    let animals = localStorage.getItem('animals');
    if (!animals) {
        animals = [];
    } else {
        // we need to convert the string variable to array in order to push new items 
        animals = JSON.parse(animals);
    }

    let animalAlreadyExist = false;
    // proverka dali veke postoi toj tip na zivotno
    animals = animals.map (animal => {
        if (animal.type === newAnimal.type) {
            animalAlreadyExist = true;
            return {...animal, number: Number(animal.numer) + Number(newAnimal.number)}
        }
        return animal
    })

    // ako ne postoi 
    //da se dodade novo zivotno vo listata
    if (!animalAlreadyExist) {
        animals = [...animals, newAnimal]   // animals.push(newAnimal)
    }

    //da se dodade modificiranata lista nazad vo localStorage
    localStorage.setItem('animals', JSON.stringify(animals));

    generateListOfAnimalsHtml(animals)
}

const generateListOfAnimalsHtml = (animalsArray) => {
    const htmlContainer = document.getElementById('container');
    // if the UL already exists, remove it and re-generate it again
    const listOfAnimals = document
}