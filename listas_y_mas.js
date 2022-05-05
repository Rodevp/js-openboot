//LISTAS, OBJETOS LITERALES Y FECHAS

//LISTAS
//son dinamicas y aceptan cualquier tipo
const list = [1, "", true, undefined, null]
const listTwo = new Array(1, "", true, undefined, null)
const listThree = new Array(3) //tamaño del arreglo
console.log(listThree) //son valores vacios para poder agregarlos después

//OBJETOS
const movil = {
    height: 10,
    with: 5,
    name: "xiaomi",
    bool: true,
    contacts: ['wan yung'],
    SO: {
        version: "mui 3.5"
    }
}
//accedemos con la notación del punto
console.log(movil.name)
console.log(movil.SO.version)

movil.year = 2019 //creamos un nuevo attr, si existe se editará su valor
console.log(movil)

//FECHAS
const moment = new Date() //nos devuelve el momento exacto en que se ejecutó
console.log(moment)

const day = moment.getDate()
const month = moment.getMonth() + 1 //se suma ya que los meses comienzas desde 0



