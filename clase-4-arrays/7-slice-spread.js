// 🧠 Tema: Extraer y Combinar Arrays: slice() y Spread Operator (...) ✂️🚀

// Instrucciones:
// - Leé cada consigna con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 7-slice-spread.js

//--------------------------------------------------
// 1. slice(): Extraer partes de un array
//--------------------------------------------------

// 👉 Paso 1: Creá un array llamado 'frutas' con los valores: 
// "manzana", "banana", "naranja", "pera", "mango"
let frutas = ["manzana", "banana", "naranja", "pera", "mango"]

// 👉 Paso 2: Usando slice(), extraé las primeras tres frutas
// y guardalas en una variable llamada 'tresPrimerasFrutas'.
let tresPrimerasFrutas = frutas.slice(0, 3);
; 
// 👉 Paso 3: Usando slice(), extraé las últimas dos frutas
// y guardalas en una variable llamada 'dosUltimasFrutas'.
let dosUltimasFrutas = frutas.slice(3);

// 👉 Paso 4: Usando slice(), extraé las frutas desde la posición 1 hasta la 3 (inclusive)
// y guardalas en una variable llamada 'frutasDelMedio'.
let frutasDelMedio = frutas.slice(1, 4);

//--------------------------------------------------
// 2. Spread Operator (...): Clonar y combinar
//--------------------------------------------------

// 👉 Paso 5: Usando el spread operator, creá una copia del array 'frutas'
// y guardala en una variable llamada 'copiaFrutas'.
let copiaFrutas = [...frutas]

// 👉 Paso 6: Creá un nuevo array llamado 'masFrutas' que contenga "kiwi" y "uva"
let masFrutas = ["kiwi", "uva"];

// 👉 Paso 7: Usando el spread operator, combiná los arrays 'frutas' y 'masFrutas'
// en un nuevo array llamado 'todasLasFrutas'.
let todasLasFrutas = [...frutas, ...masFrutas];

// 👉 Paso 8: Usando el spread operator, creá un nuevo array llamado 'frutasConNueva'
// que tenga todos los elementos de 'frutas' más "sandía" al final.
let frutasConNueva = [...frutas, "sandía"];

//--------------------------------------------------
// 3. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 9: Seleccioná la opción correcta sobre slice():
// Guardá la letra de la opción correcta en la variable 'respuestaSlice'.
// Opción A: Modifica el array original.
// Opción B: Crea una copia superficial de una porción del array.
// Opción C: Solo puede extraer elementos desde el principio del array.
let respuestaSlice = 'B';

// 👉 Paso 10: Seleccioná la opción correcta sobre el spread operator:
// Guardá la letra de la opción correcta en la variable 'respuestaSpread'.
// Opción A: Solo sirve para arrays de strings.
// Opción B: Modifica el array original.
// Opción C: Permite crear copias y combinar arrays sin modificar los originales.
let respuestaSpread = 'C';

// 👉 Paso 11: Seleccioná la opción correcta sobre la diferencia entre slice() y spread:
// Guardá la letra de la opción correcta en la variable 'respuestaDiferencia'.
// Opción A: slice() extrae partes de un array, spread crea copias o combina arrays.
// Opción B: No hay diferencia, hacen lo mismo.
// Opción C: slice() siempre es mejor que usar spread.
let respuestaDiferencia = 'A';

// No modifiques el código debajo de este comentario
module.exports = {
  frutas,
  tresPrimerasFrutas,
  dosUltimasFrutas,
  frutasDelMedio,
  copiaFrutas,
  masFrutas,
  todasLasFrutas,
  frutasConNueva,
  respuestaSlice,
  respuestaSpread,
  respuestaDiferencia,
};