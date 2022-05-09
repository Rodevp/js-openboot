//son dinamicos en sus tipos de datos

let array = new Array()
let arr = [1,2,3,4,5,6]

arr[0] //accedemos a las posiciones - comienza en 0

//metodos mutables
arr.push(7) //agrega al final, el valor original del arreglo cambia
arr.unshift(0) // agrega al principio, el valor original del arreglo cambia

arr.pop() //elimina el ultimo
arr.shift() //elimina el primero
    //splice(comienzo, cuantosElimina)
arr.splice(0, 1) //en este caso eliminará el primero

//unir listas

const arr_one = [1,2,3]
const arr_two = [4,5,6]
//no muta los arreglos originales
const r = arr_one.concat(arr_two) //devuelve un nuevo array con todos los valores
const r_2 = [...arr_one, arr_two]


//slice crea un nuevo arreglo a partir de otro
//no muta el original
const n_arr = [1,2,3,4,5,6]
 //slice(inicio, fin - 1)
const r_n = n_arr.slice(0, 3) //devuelve [1,2,3]

//metodos de iteración
const iter = [1,2,3,4,5,6]

//tradicional
for (let index = 0; index < iter.length; index++) {
    console.log( iter[index] )
}

//FORMA ES6
iter.forEach(value => {
    console.log(value)
})

//buscar un valor en una lista
iter.find(value => value === 5) //devuelve el valor, si no devolverá undefined

//metodos avanzados (filter, map, reduce)
//estos metodos no mutan el original

const names = ["lucas", "pedro", "juan"]

//devuelve una nueva lista con el mismo numero de elementos pero modificados
const names_modify = names.map((name, i) => `${i + 1} - ${name}`)

const n = [1,2,3,4,5,6,7,8,9]

//filtra una lista con una condicion sobre sus elementos
const r_num = n.filter(value => value > 3) //devuelve todos los mayores a 3

//ordenar
//muta el array original
const arr_s = [3,8,0,2,5,1]
const sorting_arr = arr.sort((a, b) => a - b) //de menor a mayor
const sorting_arr_2 = arr.sort((a, b) => b - a) //de mayor a menor

// comparar si todos los elementos de una lista cumplen con una condicion
const obj = [
    { name: 'juan', pay: true},
    { name: 'lucas', pay: true}
]

const everyPay = obj.every(elem =>  elem.pay === true) //devuelve true si todos cumplen

//comparar 2 listas
const one = [1,2,3,4]
const two = [1,2,3,4]

const equals = one.every((elem, i) => elem === two[i] ) //comparariamos cada elemento

const exists = one.some(elem => elem === 90) //valida si como minimo algun elemento cumple con la condicion
//devuelve true o false

//obtener un array con un objeto iterable
const str = "hola mundo"
const str_arr = Array.from(str)





