const persona = {
    name: "Junnier",
    age: 22,
    isWorking: false,
    friends: ["Mauricio", "Anyela", "Marlon", "Dacto"],
    mother: {
        name: "Martha",
        age: 42,
        sons: 3,
    },

    nameMother: function () {
        console.log(this.mother.name);
    },
    namePersona() {
        console.log(this.name);
    },
};

console.log(persona.mother.name); //cuando se quiere llamar el nombre de la mamá desde una funcion se utiliza corchete así persona[pather][namePather]
// console.log(persona.age)
// persona.nameMother()
// console.log(persona.friends[0])

// //AGREGAR
// persona.lastName = 'Anacona'
// console.log(persona)

// //ELIMINAR
// delete persona.lastName
// console.log(persona)

//SACAR PROPIEDADES
const { name, age, isWorking } = persona;
console.log(name);

//SACAR PROPIEDADES RENOMBRANDOLAS
const { name: nombre, age: edad } = persona;
console.log(nombre);
