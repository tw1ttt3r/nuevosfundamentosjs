// variables
// ES5 var

// ES6 const y let
// const: permite generar una constante (no cambia ni su tipo ni su valor durante su alcance de vida)
// const (excepción): la regla del valor no aplica en estructuras de datos (objetos y arreglos)
// let: permite generar una variable de alcance de bloque, si puede cambiar tipo y valor

function holaPersona() {
  let nombre = "javier"
  console.log("nombre en funcion", nombre)
}

const nombre = "peter"

// scope global
if(true) {
  // scope local
}
console.log("nombre", nombre)

holaPersona()
console.log("nombre despues", nombre)

// funciones
// funciones anónimas: son funciones especiales que no requieren un nombre al ser creadas
// ES5
const saludo = function() {
  console.log("hola desde funcion anónima")
}

saludo()
// arrow functions
// return implicito
// el uso de parentesis en parametros mientras sea un solo parametro no son obligatorios
// ocupar _ representando que el valor no se usara o no reciben parametros
const funcionarrow = _ =>  4

console.log(funcionarrow())

// POO
// ES5
// basado en prototipos
// funciones constructoras

function Persona(nombre, edad, genero) {
  this._nombre = nombre
  this._edad = edad
  this._genero = genero

  this._saludo = function () {
    console.log("mi nombre es", this._nombre)
  }
}

var pedro = new Persona('pedro', 31, 'masculino')
pedro._saludo()

console.log("pedro", pedro)

// ES6
// palabra reservada class
class PersonaClass {
  constructor(nombre, edad, genero) {
    this._nombre = nombre
    this._edad = edad
    this._genero = genero
  }

  saludo() {
    console.log("yo soy ",this._nombre)
  }
}

const antonio = new PersonaClass('antonio', 45, 'masculino')

console.log("antonio", antonio)

antonio.saludo()


// Funcional
function dobleNumero(x) {
  return x * 2
}

console.log("2", dobleNumero(2))
console.log("4", dobleNumero(4))
console.log("7", dobleNumero(7))
console.log("8", dobleNumero(8))
console.log("3", dobleNumero(3))
console.log("7", dobleNumero(7))

// Estructuras de datos

// arreglos
// secuencias de elementos ordenados e identificados por un indide numerico

const nuevoarreglo = [ 5, "hola", 8, 3, true ]

// objetos
// conjunto de propiedades mayormente con relación que describen caracteristicas de algo en especifico
const nuevoobjeto = { nombre: "peter", edad: 31, altura: 172 }
// keys = [ 'nombre', 'edad', 'altura' ]
// entries = [ ['nombre', 'peter' ], ['edad', 31 ], ['altura', 172 ] ]

// desestructuracion arreglos const [ llave, valor ]  = ['nombre', 'peter' ]


// inmutabilidad
// obtener solo los numeros del nuevoarreglo
const arreglonumeros = [ 5, 8, 3 ]

// pilares de la programacion funcional en javascript
// filter
// regresa un nuevo arreglo no de la misma dimension que el original con los elementos que cumplan las condiciones

// map
// regresa un nuevo arreglo con la misma dimension que el original con los elementos que cumplan las condiciones

// reduce
// regresa cualquier tipo de dato valido de javascript

// obtener solo los valores numericos de cualquier estructura de dato
// ! (bang) = niega valores booleanos
const solonumerosfilter = nuevoarreglo.filter((current) => {
  if (typeof current === "number") {
    return current
  }
})

console.log("solonumerosfilter", solonumerosfilter)

const solonumerosmap = nuevoarreglo.map((current) => {
  if (typeof current === "number") {
    return current
  }
})

console.log("solonumerosmap", solonumerosmap)

const solonumerosreduce = nuevoarreglo.reduce((prev, current) => {
  if (typeof current === "number") {
    return [ ...prev, current ]
  }
  return [ ...prev ]
}, [])

console.log("solonumerosreduce", solonumerosreduce)


const solonumerosreduceObj = Object.entries(nuevoobjeto).reduce((prev, [ _, valor ]) => {
  if (typeof valor === "number") {
    return [ ...prev, valor ]
  }
  return [ ...prev ]
}, [])

console.log("solonumerosreduceObj", solonumerosreduceObj)
