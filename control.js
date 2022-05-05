//EXISTEN 2, BUCLES Y CONDICIONES

//CONDICIONES -> SI SE CUMPLE UNA CONDICION O NO

const condicion = false

if (condicion) {
    console.log('hola')
} else {
    console.log('no se cumplió')
}

/**
 * comparaciones 
 * > mayor que
 * < menor que
 * >= mayor o igual que
 * <= menor o igual que
 * === compara si su valor y tipo son iguales
 * !== si son tipos y valores diferentes
 *  || -> Preposicion ó
 *  && -> Preposicion Y
 *  !  -> Preposicion de negación
 * 
 */


//BUCLES
//inicializacion; condicion; actualizacion
for (let i = 0; i < 5; i++) {
    console.log(i)
}

for (const iterator of object) {
    console.log(iterator)
}

[1,2,3,4,5].forEach(num => {
    console.log(num)
})

//Recorremos objetos

const obj = {
    name: "lucas"
}

for (const key in obj) {
    const name = obj[key]
    console.log(name) 
}