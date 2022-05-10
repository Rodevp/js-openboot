function forever_true() {
    return true
}

const say_promise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola soy una promesa')
    }, 5000)
    reject('X')
})

say_promise()
    .then(msg => console.log(msg) )
    .catch(e => console.log(e))