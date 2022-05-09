//funciones en js
            //name === parametro
function say(name) {
    console.log('holiwi', name)
}

//parametro con valores autodefinidos
function printNumber(number = 1) {
    console.log(number)
}

printNumber()
printNumber(8)


//funciones con n parametros
function someElement(...parameters) {
    console.log(parameters) //los mostrará en una lista
}


someElement(1,2,3,4,5,6,7,8, "holi", {name: 'lucas'})

//fn con retorno
function sum(a,b) {
    return a + b
}


let hola = 'hola'
function fn () {
    //todo lo que definamos dentro de esta funcion no tendrá acceso por fuera
    //de ella
    let hola = 'holiwi'
    console.log('hola desde funcion -> ', hola)
}

console.log(hola)
fn()


//funciones flecha y anonimas

//las funciones flechas a diferencia de las functions normales
//no tienen acceso a bind y otros metodos e incluso su contexto de this cambia
//en el caso de hoisting no podrá hacerse ya que esta vive en ref de una constante

//una funcion anonima es una fn que no se tiene referencia a ella solo va
//poder ser llamada por un intermediario, es decir la constante
const fn_arrow = () => {
    console.log('holiwi')
}

const pow = (a, b) => a ** b //podremos obvear el return

//funciones asincronas y promesas

const myPromise = () => new Promise((resolve, reject) => {
    //si todo es correcto
    //puede haber codigo que tarde x tiempo y podremos lanzar error en caso de fallo
    if (true) {
        resolve()
    } else {
        reject()
    }

})

myPromise()
    .then(() => console.log('is a live') ) //manejamos si nuestra promesa o codigo se cumpla
    .catch(() => console.log('is a error') ) //manejamos el error que pueda pasar 




