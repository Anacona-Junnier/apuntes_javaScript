//sort, método para organizar un array
const numbers = [10,5,8,2,1]

//NO organiza bien
numbers.sort()
console.log('NO organizado ')
console.log(numbers)

//SI organiza bien
numbers.sort((a,b) => a-b)
console.log('SI organizado ')
console.log(numbers)

//ORGANIZAR sin afectar el array original
const organizeNumbers = numbers.sort((a,b) => a-b) 
console.log('Organizado en nuevo arreglo ')
console.log(organizeNumbers)

//ORGANIZAR Strings
const text = ['isner', 'junnier', 'angel']
text.sort()
console.log('Texto Organizado ')
console.log(text)


//COPIAR arrays
const copyText = [...numbers]
console.log('Array copiado ')
console.log(copyText)

//Prueba
console.log(Math.abs(15))