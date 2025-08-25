// 🧠 Tema: Funciones en JavaScript

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 1-funciones.js

//--------------------------------------------------
// 1. Teoría: ¿Qué es una función?
//--------------------------------------------------

// 👉 Paso 1: Seleccioná la opción correcta sobre qué es una función en JavaScript:
// Guardá la letra de la opción correcta en la variable 'respuestaTeoria1'. Ejemplo: let respuestaTeoria1 = "A";
// Opción A: Una función es un tipo especial de variable que almacena solo números.
// Opción B: Una función es un bloque de código reutilizable que realiza una tarea específica.
// Opción C: Una función es una estructura de control como if o for.
 let respuestaTeoria1 = "B";

//--------------------------------------------------
// 2. Declarar y llamar funciones 
//--------------------------------------------------

// 👉 Paso 2: Declarar una función llamada 'saludar' que muestre en consola "¡Hola, mundo!"
function saludar() {
  console.log("¡Hola, mundo!");
}
// 👉 Paso 3: Llamá a la función 'saludar' para que se muestre el mensaje en consola
saludar();

//--------------------------------------------------
// 3. Funciones con parámetros
//--------------------------------------------------

// 👉 Paso 4: Declarar una función llamada 'sumar' que reciba dos parámetros y retorne la suma
function sumar(a, b) {
  return a + b;
}
// 👉 Paso 5: Mostrá en consola el resultado de llamar a 'sumar' con los valores 3 y 7
console.log(sumar(3, 7));
//--------------------------------------------------
// 4. Funciones que retornan valores
//--------------------------------------------------

// 👉 Paso 6: ¿Qué hace la siguiente función? Seleccioná la opción correcta:
// Guardá la letra de la opción correcta en la variable 'respuestaTeoria2'. Ejemplo: let respuestaTeoria2 = "C";
// function doble(x) {
//   return x * 2;
// }
// Opción A: Retorna el doble del valor recibido como parámetro.
// Opción B: Retorna la suma de x más 2.
// Opción C: No retorna ningún valor.
 let respuestaTeoria2 = "A";

//--------------------------------------------------
// 5. Funciones expresión
//--------------------------------------------------

// 👉 Paso 7: Declarar una función expresión llamada 'multiplicar' que reciba dos parámetros y retorne el producto
let multiplicar = function(a, b) {
  return a * b;
};

// 👉 Paso 8: Mostrá en consola el resultado de llamar a 'multiplicar' con los valores 4 y 5
console.log(multiplicar(4, 5));
//--------------------------------------------------
// 6. Arrow functions (funciones flecha)
//--------------------------------------------------

// 👉 Paso 9: Declarar una arrow function llamada 'restar' que reciba dos parámetros y retorne la resta
const restar = (a, b) => a - b;

// 👉 Paso 10: Mostrá en consola el resultado de invocar a 'restar' con los valores 10 y 6
console.log(restar(10, 6));


// No modifiques el código debajo de este comentario
module.exports = {
  respuestaTeoria1,
  saludar,
  sumar,
  respuestaTeoria2,
  multiplicar,
  restar,
};