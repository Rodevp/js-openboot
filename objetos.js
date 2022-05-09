//objetos literales
const r = {
    id: 5,
    name: 'juan',
    isDeveloper: true
}

//acceder a las propiedades
r.isDeveloper

const key = "isDeveloper"
r[key]

//copia sus propiedades mas no su ref en memoria
const objCopy = { ...r }

//deep copy
const objCopy_2 = JSON.parse( JSON.stringify(r) )


Object.keys(objCopy_2) //devuelve una lista con las keys del objeto
