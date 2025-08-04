// 🧠 Tema: Operadores de comparación

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados.
// - Ejecutá este archivo con el comando: node 01-operadores-comparacion.js

//--------------------------------------------------
// 1. Comparación de igualdad (== vs ===)
//--------------------------------------------------

// 👉 Paso 1: Declará dos variables con los siguientes valores:
 let numero = 10;
 let textoNumero = "10";
 
// 👉 Paso 2: Compará las variables usando igualdad simple (que no verifica el tipo de dato)
// Completá la siguiente línea:
 let comparacionSimple = (numero == textoNumero);

// 👉 Paso 3: Compará las variables usando igualdad estricta (que sí verifica el tipo de dato)
// Completá la siguiente línea:
 let comparacionEstricta = (numero === textoNumero);

// 👉 Paso 4: Mostrá ambos resultados en consola y explicá la diferencia en un comentario
console.log(comparacionSimple);
// El comparador == es un compardor devil que no compara los tipos de datos

console.log(comparacionEstricta);
// El comparador === es un compardor mas fuerte que compara los tipos de datos, significa que es mas estricto y eficiente a la de programar.

// 👉 Paso 5: Descomenta la opción correcta sobre la igualdad simple (==):
let explicacionIgualdadSimple;
// explicacionIgualdadSimple = "La igualdad simple (==) compara el valor y el tipo de dato";
 explicacionIgualdadSimple = "La igualdad simple (==) solo compara el valor, no el tipo de dato";
// explicacionIgualdadSimple = "La igualdad simple (==) solo funciona con números";
// console.log("Sobre la igualdad simple:", explicacionIgualdadSimple);

//--------------------------------------------------
// 2. Comparación de desigualdad (!= vs !==)
//--------------------------------------------------

// 👉 Paso 6: Usando las mismas variables, compará usando desigualdad simple (que no verifica el tipo)
 let desigualdadSimple = (numero != textoNumero);

// 👉 Paso 7: Compará usando desigualdad estricta (que sí verifica el tipo)
  let desigualdadEstricta = (numero !== textoNumero);

// 👉 Paso 8: Mostrá ambos resultados en consola
console.log(desigualdadSimple);

console.log(desigualdadEstricta);

// 👉 Paso 9: Descomenta la opción correcta sobre la desigualdad estricta (!==):
 let explicacionDesigualdadEstricta;
// explicacionDesigualdadEstricta = "La desigualdad estricta (!==) solo compara el valor";
 explicacionDesigualdadEstricta = "La desigualdad estricta (!==) compara tanto el valor como el tipo de dato";
// explicacionDesigualdadEstricta = "La desigualdad estricta (!==) solo funciona con strings";
// console.log("Sobre la desigualdad estricta:", explicacionDesigualdadEstricta);

//--------------------------------------------------
// 3. Comparaciones mayor/menor que
//--------------------------------------------------

// 👉 Paso 10: Declará dos variables con tu edad actual y la edad mínima para conducir (18)
  let miEdad = 33
  let edadMinima = 18

// 👉 Paso 11: Verificá si tu edad es mayor o igual que la edad mínima
 let puedoConducir = miEdad >= edadMinima;

console.log(puedoConducir);

// 👉 Paso 12: Verificá si tu edad es menor que la edad mínima
 let necesitoCumplirAnios = miEdad <= edadMinima;

// 👉 Paso 13: Mostrá ambos resultados en consola
console.log(necesitoCumplirAnios);

// 👉 Paso 14: Descomenta la opción correcta sobre los operadores de comparación:
 let explicacionComparadores;
 explicacionComparadores = "El operador >= significa 'mayor o igual que' y el operador < significa 'menor que'";
// explicacionComparadores = "El operador >= significa 'mayor que' y el operador < significa 'menor o igual que'";
// explicacionComparadores = "Los operadores >= y < solo funcionan con números enteros";
 console.log("Sobre los operadores de comparación:", explicacionComparadores);

//--------------------------------------------------
// 4. Aplicación práctica: Sistema de calificaciones
//--------------------------------------------------

// 👉 Paso 15: Declará la variable calificacion con una calificación (del 0 al 10)
 let calificacion = 7.5;

// 👉 Paso 16: Creá variables booleanas que indiquen:
//- Si la calificación es aprobatoria (mayor o igual a 7)
  let esAprobatoria = calificacion >= 7;
// - Si la calificación es perfecta (igual a 10)
  let esPerfecta = calificacion === 10;
// - Si la calificación es insuficiente (menor a 7)
  let esInsuficiente = calificacion < 7;

 //let esAprobatoria = true;
// let esPerfecta = 
// let esInsuficiente = 

// 👉 Paso 17: Mostrá los resultados en consola
console.log("¿La calificación es aprobatoria? " + esAprobatoria); 


// 👉 Paso 18: Descomenta la opción correcta sobre las expresiones booleanas:
 //let explicacionBooleanas;
// explicacionBooleanas = "Las expresiones de comparación siempre devuelven un valor numérico";
// explicacionBooleanas = "Las expresiones de comparación siempre devuelven un valor booleano (true o false)";
// explicacionBooleanas = "Las expresiones de comparación solo funcionan con el operador ===";
// console.log("Sobre las expresiones booleanas:", explicacionBooleanas);

//--------------------------------------------------
// 5. Desafío: Comparación de fechas
//--------------------------------------------------

// 👉 Paso 19: Creá dos objetos Date, uno con la fecha actual y otro con una fecha futura
//  let fechaActual = new Date();
// let fechaFutura = new Date(2026, 0, 1); // 1 de enero de 2026

// 👉 Paso 20: Compará si la fecha actual es anterior a la fecha futura
// let esAnterior =
