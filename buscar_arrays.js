const emojis = ['✨', '🥑', '😍']

//indexOf, retorna posición del elemento, -1 cuando no lo encuentra
const posicionCorazon = emojis.indexOf('😍')
console.log(posicionCorazon)

//includes, retorna true ó false si un array incluye un determinado elemento
const incluyeAguacate = emojis.includes('🥑')
console.log(incluyeAguacate)

/*some, retorna un booleano si encuentra "alguno" verdadero a partir de una condición, 
recibe como parametros una función*/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
    console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6
    return number > 5
})
console.log(tieneNumeroMayorA5) // -> true

//every, valida que "todos" sea verdadero, si al menos uno es falso retorna falso
const moreEmojis = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = moreEmojis.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

//find, retorna el primer elemento que cumpla la condición
const negativeNumbers = [20,30,-10,25,-5]

const lowestNumber = negativeNumbers.find(number => number<0)
console.log(lowestNumber) // -> 10

//findIndex, retorna el indice del primer elemento que cumpla la condición si no lo encuentra retorna -1
const firstNegativeNumberIndex = negativeNumbers.findIndex(number => number<0)
console.log(firstNegativeNumberIndex) // -> 2
