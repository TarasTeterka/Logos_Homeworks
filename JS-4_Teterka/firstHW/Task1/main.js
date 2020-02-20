let person = {
firstName: "Ivan",
secondName: "Ivanov",
showData(){
           console.log(`Firstname: ${this.firstName}; Secondname: ${this.secondName}`)
        }
    }

person.showData()

let newPerson = person
newPerson.firstName = "Petro",
newPerson.secondName = "Petriv",

newPerson.showData()