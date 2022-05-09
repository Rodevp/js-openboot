let str = "doble comilla"
let str2 = 'comillas simples'
let nombre = 'lucas'
let template_string = `hola mundillo ${nombre}`

//METODOS MÁS COMÚNES
str.length  //tamaño del string

//OBTENER PARTE DE UN STRING -> SUBSTRING - SLICE
        //slice(empieza, termina - 1)         
let new_str = str.slice(0, 4)
let subs_str = str.substring(0, 4)

//REEMPLAZAR PARTE DE UNA CADENA
let my_n = "mi nombre rodrigo"
    //reemplazar, por cual reemplazar  
my_n.replace("rodrigo", "lucas") //solo la primer coincidencia
my_n.replace(/rodrigo/g, "lucas") //reemplaza todas las instancias

my_n.toLocaleLowerCase() //lo pasa a minuscula
my_n.toUpperCase() // lo pasa a mayuscula

let str_one = "uno"
let str_two = "dos"

str_one.concat(' ', str_two) // devuelve "uno dos"

str.trim() // elimina espacios al principio y final tenemos trimStart, trimEnd

str.charAt(0) //nos devuelve la primera letra de la cadena otra opcion es 
// str[0] ya que son un iterable

str.indexOf("comilla") // devuelve la posicion de la palabra, sino lo encuentra es -1

//EXPRESIONES REGULAR Y MÁS METODOS
str.match(/los/g) //devuelve en un array todas las instancias de la palabra "los" ej: ["los", "los"]

str.includes("comilla") //devuelve true o false si el texto contiene la palabra o no

str.startsWith("dos") //si empieza por "dos" = true sino = false, es caseSensitive
str.endsWith("dos") //si termina por "dos" = true sino = false, es caseSensitive
