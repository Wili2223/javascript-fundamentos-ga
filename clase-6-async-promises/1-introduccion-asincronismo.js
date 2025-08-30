// 🧠 Tema: Introducción al Asincronismo en JavaScript ⏳🛠️

// Instrucciones:
// - Leé cada paso y escribí tu código donde se indica.
// - Usá `console.log()` para ver los resultados.
// - Ejecutá este archivo con el comando: node 1-introduccion-asincronismo.js

//--------------------------------------------------
// 1. Entendé la ejecución sincrónica
//--------------------------------------------------

// 👉 Paso 1: Escribí tres console.log seguidos para simular instrucciones secuenciales.
// Mostrá por consola:
// "Inicio del programa"
// "Proceso principal"
// "Fin del programa"
console.log("Inicio del programa");
console.log("Proceso principal");
console.log("Fin del programa");

//--------------------------------------------------
// 2. Introducí una tarea asíncrona simple
//--------------------------------------------------

// 👉 Paso 2: Usá `setTimeout` para simular una operación asíncrona que se ejecuta luego de 2 segundos.
// Mostrá por consola dentro del setTimeout: "Tarea asíncrona completada".
setTimeout(() => console.log("Tarea asíncrona completada"), 2000);

// 👉 Paso 3: Agregá un console.log debajo del setTimeout con el mensaje: "Esperando que termine la tarea..."
// Observá el orden en que se muestran los mensajes.
console.log("Esperando que termine la tarea...");

//--------------------------------------------------
// 3. Reflexión final
//--------------------------------------------------

// 👉 Paso 4: Respondé en un comentario: 
// ¿Por qué el mensaje "Tarea asíncrona completada" aparece último, aunque esté antes en el código?

// El mensaje "Tarea asíncrona completada" aparece último porque setTimeout es asíncrono.
// JavaScript programa la función para ejecutarse después de 2 segundos, 
// mientras continúa ejecutando el código siguiente sin esperar.


//--------------------------------------------------
// 4. Práctica rápida (verdadero o falso)
//--------------------------------------------------

// 👉 Paso 5: Respondé si estas afirmaciones son verdaderas o falsas:
// Guardá un booleano en tus respuestas en las variables correspondientes.

let respuesta1 = false; // "JavaScript ejecuta todo el código al mismo tiempo sin esperar tareas lentas."
let respuesta2 = true; // "setTimeout permite simular tareas que se ejecutan después de cierto tiempo."
let respuesta3 = false; // "El código que está después de setTimeout se bloquea hasta que el tiempo se cumple."

//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------
module.exports = {
  respuesta1,
  respuesta2,
  respuesta3,
};
