// 01-variables.js

// 🧠 Tema: Variables

// Instrucciones:
// - Seguí cada paso en orden.
// - Escribí tu código donde se indica o descomentá las líneas correspondientes.
// - Usá `console.log()` para mostrar resultados en la terminal.
// - Ejecutá este archivo con el comando: node 01-variables.js. (Así podras ver los console.logs)
// - No modifiques el nombre de las variables credas.
// - Para correciones, ejecuta en la terminal `node 01-variables.test.js` y verás los resultados.

//--------------------------------------------------
// 1. Declaración de una variable con let
//--------------------------------------------------

// 👉 Paso 1: Declarar una variable llamada "nombre" y asignarle tu nombre.

let nombre = "williams";

// 👉 Paso 2: Mostrar en consola el valor de "nombre".
console.log(nombre);


//--------------------------------------------------
// 2. Reasignación de variables
//--------------------------------------------------

// 👉 Paso 3: Cambiá el valor de "nombre" por otro nombre.

nombre = "pedro";

// 👉 Paso 4: Mostrá nuevamente el valor actualizado.

console.log(nombre);


//--------------------------------------------------
// 3. Declaración con const
//--------------------------------------------------

// 👉 Paso 5: Declarar una constante llamada "edad" y asignarle tu edad.

const edad = 33;

// 👉 Paso 6: Intentá cambiar el valor de "edad" (¿Qué ocurre? Probalo descomentando la línea).

//edad = 18;

//--------------------------------------------------
// 4. Buenas prácticas en nombres de variables
//--------------------------------------------------

// 👉 Paso 7: Descomentá solo las variables que tienen nombres válidos y siguen buenas prácticas:

let apellidoDelUsuario = 'Pérez'
let _contador = 1
let $total = 100
//let 1variable = 5
// let nombre-apellido = 'X'

// 👉 Paso 8: Probá mostrar en consola alguna de las variables válidas.

console.log(apellidoDelUsuario);
console.log(_contador);
console.log($total);

//--------------------------------------------------
// 5. Ejercicios prácticos
//--------------------------------------------------

// 👉 Paso 9: Crear una variable "ciudad" con tu ciudad actual
let ciudad = "Puerto Madryn";

// 👉 Paso 10: Crear una variable "esEstudiante" con valor true o false
let esEstudiante = true;

// 👉 Paso 11: Crear una variable "anio" con el año actual
let anio = 2025;

// 👉 Paso 12: Mostrar todas estas variables en consola
console.log(ciudad, esEstudiante, anio);
//--------------------------------------------------
// 6. ¿let o const? Desafío de decisión
//--------------------------------------------------

// 👉 Paso 13: Descomentá la opción correcta según la descripción.

// Este valor no debería cambiar nunca
const apiKey = '1234abcd'
// let apiKey = '1234abcd'

// Este contador se va a ir incrementando en el tiempo
//  const clicks = 0
let clicks = 0

// El nombre de usuario se define una sola vez al iniciar sesión
const nombreUsuario = 'Juan'
// let nombreUsuario = 'Juan'

// El precio puede cambiar con descuentos u ofertas
// const precio = 1000
 let precio = 1000

// Un mensaje de bienvenida que no se modificará
 const mensaje = 'Bienvenido al sistema'
// let mensaje = 'Bienvenido al sistema'

// 👉 Paso 14: Mostrá en consola al menos dos de estas variables.

console.log(mensaje,apiKey);

//--------------------------------------------------
// Preguntas para reflexionar (no hace falta responder con código)
//--------------------------------------------------
// - ¿Cuándo te conviene usar const en lugar de let?

   // este es un ejemplo claro en el cual usaria const para que no se peuda modificar la clave.
//const apiKey = '1234abcd'
// let apiKey = '1234abcd'

// - ¿Qué pasa si no le das un valor inicial a una variable?
// creo que al no darle un valor inicial a la variable javascript le da uno por defecto
let = 200;
console.log(let);

