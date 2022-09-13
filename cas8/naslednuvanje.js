class Employee {
    id
    name
    surname
    accountId

    constructor (id, name, surname, accountId) {
        this.id = id
        this.name = name
        this.surname = surname
        this.accountId = accountId
    }

    setId (id) {
        this.id = id
    }
    // setName (name) {
    //     this.name = name
    // }                                    // MOJ PRIMER
    // setAccountId (accountId) {
    //     this.accountId = accountId
    // }
}

class ITEmployee extends Employee {
    role //   sysadmin, fe, be, project menager

    constructor(role) {
        super()
        this.role = role
    }
}

const IT1 = new ITEmployee('sysadmin');
IT1.setId(1)
// IT1.setName("Stefani")
// IT1.setAccountId(61984)    // Moj primer


console.log(IT1)