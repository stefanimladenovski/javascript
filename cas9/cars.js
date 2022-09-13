/* Da se definira klasa kola koja sto sodrzi
 properties: model, boja, godina na proizvodstvo,
 maksimalna brzina i momentalna brzina
Treba da se kreiraat dva metodi so koi sto ke go
 ubrzuvame i usporuvame voziloto. Pri ubrzuvanje, dokolku ja dostigneme
 maksimalnata brzina, i probame da ubrzame uste povekje, da se ispecati predupreduvanje (ne moze da odis pobrzo od 200)
 Pri usporuvanje, dokolku stigneme do 0, da se ispecati poraka deka voziloto e zapreno (stopping...)
 Dvata metodi za ubrzuvanje i usporuvanje treba kako parametar da primaat vrednost
 (za kolku km/h ubrzuvame ili usporuvame) +20 -20
 Vozenjeto na kolata go simulirame so beskonecen while ciklus */

 class Car {
    constructor (model, color, year, maxVelocity, currentVelocity) {
        this.model = model
        this.color = color
        this.year = year
        this.maxVelocity = maxVelocity
        this.currentVelocity = currentVelocity
    }

    goFaster(acceleration) {
      let newVelocity = this.currentVelocity + acceleration
      if (newVelocity >= this.maxVelocity){
        this.currentVelocity = this.maxVelocity
        console.log('You have reached the speed limit!')
      } else {
        this.currentVelocity = newVelocity
      }
    }

    goSlower(deceleration) {
        let newVelocity = this.currentVelocity - deceleration
        if (newVelocity <= 0) {
            this.currentVelocity = 0
            console.log('The vehicle has stopped!')
        } else {
            this.currentVelocity = newVelocity
        }
    }
 }

 const Audi = new Car ("Audi", 'grey', '2020', 200, 0)

// setTimeout(() => {
//   Audi.goFaster(30)
//   console.log(Audi.currentVelocity)
// }, 2000)

//  ASINHRONA FUNKCIJA
setInterval(() => {
    Audi.goFaster(30)
    console.log('Audi speed : ' + Audi.currentVelocity)
}, 1000)

const BMW = new Car ('BMW', 'white', 2015, 200, 150)

setInterval(() => {
    BMW.goSlower(20)
    console.log('BMW speed : ' + BMW.currentVelocity)
}, 1000)