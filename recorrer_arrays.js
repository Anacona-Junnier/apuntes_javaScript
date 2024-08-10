let frutas = ['mango', 'lulo', 'fresa']

// //RECORE con loop WHILE
// i = 0
// while (i < frutas.length) {
//     console.log(frutas[i])
//     i++
// }

// //RECORRER con loop FOR
// for (let j = 0; j < frutas.length; j++) {
//     console.log(frutas[j])
// }

// //RECORRER con FOREACH
// frutas.forEach(function (fruta) {
//     console.log(fruta)
// })
// frutas.forEach(fruta => console.log(fruta))

// //RECORRER con FOR_OF
// for (let fruta of frutas){
//     console.log(fruta)
// }

// //RECORRER strings con FOR_OF
// let name = 'junnier'

// for (let one of name) {
//     console.log(one)
// }

//Encontrar numeros pares
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

function sumarPares(numbers) {
    let suma = 0
        numbers.forEach(function (number) {
        if (number % 2 === 0){
            suma += number
        }
        })
    return suma
    }
