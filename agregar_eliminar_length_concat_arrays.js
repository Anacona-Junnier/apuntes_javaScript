// //CREAR arrays, estos permite almacenar TODO tipo de valor (String, int, boolean, etc) pero NO es recomendable
// const frutas = ['manzana', 'pera', 'mango']
// console.log(frutas)

// //LONGITUD de un array con la propiedad LENGTH
// console.log(frutas.length)
// //RECORTAR la longitud 
// frutas.length = 2
// console.log(frutas)

// //AGREGAR AL FINAL un elemento con el método PUSH
// frutas.push('papaya')
// console.log(frutas)

// //AGREGAR AL INICIO un elemento
// frutas.unshift('banano')
// console.log(frutas)

// //ELIMINAR ULTIMO elemento 
// frutas.pop()
// console.log(frutas)

// //ELIMINAR PRIMER elemento
// frutas.shift()
// console.log(frutas)

//CONCATENAR arrays con el método CONCAT
const numbers = [1,2,3]
const numbers2 = [4,5]
const allNumbers = numbers.concat(numbers2)
console.log(allNumbers)

//OTRA FORMA DE CONCATENAR con el método [...] SPREAD OPERATOR
const allNumbers2 = [...numbers, ...numbers2]
console.log(allNumbers)