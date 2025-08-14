// 🧠 Tema: Arrays en JavaScript - Conceptos Básicos 📦

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 1-arrays-basicos.js
consle.log("lo que hagas en vida resonara en al eternidad")
//--------------------------------------------------
// 1. Creación de Arrays
//--------------------------------------------------

// 👉 Paso 1: Creá un array llamado 'numeros' que contenga los números del 1 al 5.
let numeros = [1, 2, 3, 4, 5]

// 👉 Paso 2: Creá un array llamado 'mixto' que contenga diferentes tipos de datos:
// - Un número
// - Un string
// - Un booleano
// - Un objeto simple { clave: valor }
// - Otro array
let mixto = [1, "wili", true, {clave: "valor" } [1, 2, 3]];

//--------------------------------------------------
// 2. Acceso a elementos
//--------------------------------------------------

// 👉 Paso 3: Del array 'numeros', guardá en las siguientes variables:
// - primerNumero: el primer elemento
// - ultimoNumero: el último elemento
// - numeroMedio: el elemento del medio
let primerNumero = numeros[0];                        
let ultimoNumero = numeros[numeros.length - 1];       
let numeroMedio = numeros[Math.floor(numeros.length / 2)];


//--------------------------------------------------
// 3. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 4: Seleccioná la opción correcta sobre qué es un Array:
// Guardá la letra de la opción correcta en la variable 'respuestaArray1'.
// Opción A: Una colección ordenada de elementos que puede contener cualquier tipo de dato.
// Opción B: Un objeto que solo puede contener números.
// Opción C: Una variable que solo puede contener strings.
let respuestaArray1 = 'A';

// 👉 Paso 5: Seleccioná la opción correcta sobre los índices en Arrays:
// Guardá la letra de la opción correcta en la variable 'respuestaArray2'.
// Opción A: Los índices siempre comienzan en 1.
// Opción B: Los índices comienzan en 0.
// Opción C: Los índices pueden comenzar en cualquier número.
let respuestaArray2 = 'B';

// 👉 Paso 6: Seleccioná la opción correcta sobre el acceso a elementos:
// Guardá la letra de la opción correcta en la variable 'respuestaArray3'.
// Opción A: Solo se puede acceder al primer y último elemento.
// Opción B: Se puede acceder a cualquier elemento usando su índice entre paréntesis.
// Opción C: Se puede acceder a cualquier elemento usando su índice entre corchetes.
let respuestaArray3 = 'C';

//--------------------------------------------------
// 4. Comprobación práctica
//--------------------------------------------------

// 👉 Paso 7: Creá un array llamado 'datos' con los siguientes elementos en este orden:
// - El string "Hola"
// - El número 42
// - El booleano true
// - El array [1, 2, 3]
let = datos ["Hola", 42, true, [1, 2, 3]];

// 👉 Paso 8: Mostrá en consola el segundo elemento del array 'datos'.
console.log(datos[1]);

// No modifiques el código debajo de este comentario
module.exports = {
  numeros,
  mixto,
  datos,
  primerNumero,
  ultimoNumero,
  numeroMedio,
  respuestaArray1,
  respuestaArray2,
  respuestaArray3,
};