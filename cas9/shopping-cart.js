/*
Imame klasa produkt koj sto e definiran so ime i cena
i klasa shopping cart koja sto sodrzi niza od produkti
Klasata shopping cart treba da sodrzi metod koj sto ke ni 
ja presmeta vkupnata cena na site produkti koi gi sodrzi 
*/

class Product {
    name
    price

    constructor(name, price) {
        // property binding
        this.name = name
        this.price = price
    }
}

//functional logic
class ShoppingCart {
    products

    constructor(products) {
        this.products = products
        this.MAX_BUDGET = 1000
    }
    
    getTotalPrice () {
        return this.products.reduce((sum, product) => sum + product.price, 0)
    }

    addProduct (newProduct, numberOfUnits) {
        if (isNaN(numberOfUnits)){
            this.products.push(newProduct)
        } else {
            for (let i = 1; i <= numberOfUnits; i++) {
                this.products.push(newProduct)
            }
        }

        if (this.getTotalPrice() > this.MAX_BUDGET) {
            console.log('GO NADMINAVTE MAKSIMALNIOT BUDZET!!')
        }
    }

    removeProduct (name) {
        this.products = this.products.filter(product => {
            if (product.name === name) {
                return false
            }
            return true
        })
    }
}

// BUSINESS LOGIC
const Milk = new Product('milk', 40)
const Bread = new Product('bread', 20)
const Egg = new Product('egg', 5)
const Banana = new Product('banana', 10)

const Breakfast = new ShoppingCart([Milk, Bread, Egg])
Breakfast.addProduct(Banana, 5)
// Breakfast.removeProduct('egg')
// Breakfast.removeProduct('banana')

const totalPrice = Breakfast.getTotalPrice()
console.log(Breakfast.products, totalPrice)


// maksimalen budzet = 1000
// dokolku pri dodavanje na produktite otidam na 1000 denari, da ne mi dzvoli i da ispise nekoja poraka

// isto taka addProduct funkcijata da se modificira, na toj nacin sto ke mi dozvoli kako vtor parametar 
// da dodadam broj na produkti sto sakam da gi vnesam