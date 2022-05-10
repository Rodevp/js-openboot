const mul = (a) => {
    if (typeof a === 'number') {
        return a + 1
    }

    throw new Error('debe ser un numero')
}

try {
    //asi controlamos esa linea de codigo que puede llegar a fallar
    const r = mul('hola')
} catch (error) {
    console.error(error)
}

