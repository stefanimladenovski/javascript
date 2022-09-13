// object-oriented programming

class Student {

    // class properties
    #indexNo
    #semester
    #averageGrade
    #grades

    // class methods
    //constructor is mandatory - zadolzitelen e konstruktorot

    constructor (indexNo, semester, grades) {
        this.#indexNo = indexNo
        this.#semester = semester
        this.#grades = grades
    }

    //  getter
    get index () {
        return this.#indexNo
    }

    //  setter
    set index (index) {
        this.#indexNo = index
    }
  // getIndex () {
  //   return this.#indexNo
  // }
  // setIndex (index) {
  //   this.#indexNo = index;
  // }


    setGrades (grades) {
        this.#grades = grades
        this.#averageGrade = this.calculateAverageGrade(grades)
    }
    getGrades () {
        return this.#grades
    }
    getAverageGrade () {
        return this.#averageGrade
    }
    calculateAverageGrade (grades) {
        return grades.reduce((sum, grade) => sum += grade, 0) / grades.length
    }
}

// instacirame nov objekt od tipot na Student

//  pascal case imenuvanje
const StudentOne = new Student();
const StudentTwo = new Student(2, 5);

StudentTwo.index = 200
console.log(StudentTwo.index)

StudentTwo.setGrades([10, 9, 8, 6, 5, 7]);
console.log(StudentTwo.getGrades(), StudentTwo.getAverageGrade())

// StudentTwo.setIndex(200)
// console.log(StudentTwo.getIndex())
