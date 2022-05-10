//tenemos 2 formas de importar un modulo de js
//1. CommonJS - require (por defecto ya que es la primera)
//2. Import ES6 - import (moderna)

//para importar con commonJS
const modulo = require('./.../file.js')
//si es un objeto se podria destructurar
const {fn, variable, classe} = require('./.../file.js')
//si es una funcion podremos recibirlo directamente
const fn = require('./.../file.js')

//exportar a través del objeto module
module.exports = () => {console.log('exportando fn')}
module.exports = {
    version: 'exportando obj'
}
let example = 'holiwi'
module.exports = {
    example //exportando variable
}

// importar con IMPORT ES6
// primero debemos crear un packeage.json y modificar la propiedad
// "type": "module" -> y asi podremos usar la forma más actual

//exportando 
export function fn() {
    //codigo
}

export const example_import = 'hola'

export const obj = {}

//al recibirlo lo obtrendemos como un objeto
import {fn, example_import, obj} from './.../file.js'


