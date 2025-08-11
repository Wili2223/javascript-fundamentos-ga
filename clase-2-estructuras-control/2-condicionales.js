// 🧠 Tema: Condicionales (if, else if, else)

// Instrucciones:
// - Leé cada paso con atención y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados.
// - Ejecutá este archivo con el comando: node 2-condicionales.js
console.log("lo que hagas en vida resonara en la eternidad");
//--------------------------------------------------
// 1. Condicional simple
//--------------------------------------------------

// 👉 Paso 1: Declará una variable llamada 'edad' con un valor numérico
let edad1 = 33

// 👉 Paso 2: Usá una estructura condicional para verificar si la persona es mayor de edad
// Si es mayor de edad, hacé un console.log que muestre "Es mayor de edad"
// Escribe tu código aquí
if (edad1 >= 18) {
  console.log("Es mayor de edad");
}


//--------------------------------------------------
// 2. Condicional con else
//--------------------------------------------------

// 👉 Paso 3: Usá una estructura condicional para verificar si la persona es menor de edad
// Si es menor de edad, hacé un console.log que muestre "Es menor de edad"
// Si no, hacé un console.log que muestre "Es mayor de edad"
// Escribe tu código aquí
let edad = 20;

if (edad < 18) {
  console.log("Es menor de edad");
} else {
  console.log("Es mayor de edad");
}


//--------------------------------------------------
// 3. Condicional con else if
//--------------------------------------------------

// 👉 Paso 4: Declará una variable llamada 'nota' con un valor numérico
let nota = 85;

// 👉 Paso 5: Usá una estructura condicional para verificar la calificación
// Si la nota es mayor o igual a 90, hacé un console.log que muestre "Excelente"
//Si la nota es mayor o igual a 70, hacé un console.log que muestre "Bueno"
// Si la nota es menor a 70, hacé un console.log que muestre "Necesita mejorar"
// Escribe tu código aquí
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Bueno");
} else {
  console.log("Necesita mejorar");
}


//--------------------------------------------------
// 4. Aplicación práctica: Verificación de acceso
//--------------------------------------------------

// 👉 Paso 6: Creá una función que verifique el acceso de un usuario
// La función debe devolver (return) un string según el tipo de usuario:
// Si el usuario es "admin", debe retornar "Acceso total"
// Si el usuario es "editor", debe retornar "Acceso limitado"
// Si el usuario es "visitante", debe retornar "Acceso restringido"
function verificarAcceso(usuario) {
  // Escribe tu código aquí:
  if (usuario === "admin") {
    return "Acceso total";
  } else if (usuario === "editor") {
    return "Acceso limitado";
  } else {
    return "Acceso restringido";
  }
}

// 👉 Paso 7: Probá la función con diferentes valores
// Descomenta estas líneas cuando hayas completado la función

//console.log(verificarAcceso("admin"));
//console.log(verificarAcceso("editor"));
console.log(verificarAcceso("visitante"));