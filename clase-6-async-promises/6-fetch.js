// 🧠 Tema: Peticiones HTTP con fetch() 🌐
// Instrucciones:
// - Ejecutá este archivo con: node 6-fetch.js
// - Completá los pasos y usá console.log() para ver resultados.
// - Respondé en comentarios donde se indique.
//--------------------------------------------------
// 1. Fundamentos: ¿Qué es fetch y para qué sirve?
//--------------------------------------------------

// 👉 Paso 1: ¿Qué es fetch()?
// Escribí una breve definición de qué hace y qué devuelve.

// TU RESPUESTA AQUÍ ⬇️
/// fetch() es una función nativa de JS que permite hacer peticiones HTTP.
//  Devuelve una Promesa que se resuelve con la respuesta de la petición.
/// fetch() es una función nativa de JS que permite hacer peticiones HTTP.
//   Devuelve una Promesa que se resuelve con la respuesta de la petición.

// 👉 Paso 2: ¿Qué son los headers en una petición?
// Explicá para qué sirven y en qué casos son importantes.

// TU RESPUESTA AQUÍ ⬇️
// Los headers son metadatos enviados en la petición o respuesta HTTP.
// Sirven para definir formato (ej: JSON), autenticación o control de caché


// 👉 Paso 3: ¿Por qué usamos JSON en las APIs?
// Explicá por qué es común enviar y recibir datos en formato JSON.

// TU RESPUESTA AQUÍ ⬇️
// Usamos JSON porque es ligero, fácil de leer/escribir y compatible entre lenguajes.
// Es el estándar más usado para enviar/recibir datos en APIs.

// 👉 Paso 4: ¿Qué es una API REST?
// Escribí una breve definición y para qué se usa.

// TU RESPUESTA AQUÍ ⬇️
// Una API REST es una interfaz que usa HTTP para comunicarse entre sistemas,
// permitiendo operaciones como GET, POST, PUT, DELETE sobre recursos.

//--------------------------------------------------
// 2. Métodos HTTP y status codes
//--------------------------------------------------

// 👉 Paso 5: ¿Cuáles son los métodos HTTP más comunes?
// Listá al menos 3 y explicá qué hace cada uno (por ej. GET, POST, DELETE).

// TU RESPUESTA AQUÍ ⬇️
// GET → obtiene datos del servidor
// POST → envía/crea nuevos datos en el servidor
// DELETE → elimina recursos en el servidor

// 👉 Paso 6: ¿Qué diferencia hay entre GET y POST?

// TU RESPUESTA AQUÍ ⬇️
// GET pide datos sin modificar nada, POST envía datos y suele crear recursos nuevos.

// 👉 Paso 7: ¿Qué diferencia hay entre PUT y PATCH?

// TU RESPUESTA AQUÍ ⬇️
// PUT reemplaza un recurso completo, PATCH actualiza solo una parte del recurso.


// 👉 Paso 8: ¿Qué es el status code de una respuesta?
// ¿Qué significan los códigos: 200, 201, 404, 500?

// TU RESPUESTA AQUÍ ⬇️
// Status code: indica el resultado de la petición.
// 200 → OK, éxito
// 201 → Creado exitosamente
// 404 → No encontrado
// 500 → Error interno del servidor

//--------------------------------------------------
// 3. Peticiones con fetch()
//--------------------------------------------------

// 👉 Paso 9: Realizar una petición GET a una API pública.
// URL: https://jsonplaceholder.typicode.com/users

// - Usá fetch()
// - Parseá con .json()
// - Mostrá el resultado por consola

// ✅ Tip: Completá la función `getUsers` para resolver este paso.

async function getUsers(url) {
  // TU CÓDIGO AQUÍ ⬇️
    try {
    const res = await fetch(url);                 
    if (!res.ok) throw new Error(res.status);     
    const data = await res.json();                
    console.log("✅ Usuarios:", data);            
    return data;                                  
    } catch (err) {
    console.log("❌ Error:", err);                
  }
  
};


// 👉 Paso 10: Realizar una petición POST para crear un usuario
// URL: https://jsonplaceholder.typicode.com/users

// - Enviá un objeto con nombre, email y username.
// - Usá método POST con headers
// - Mostrá el resultado por consola

// ✅ Tip: Completá la función `createUser` para resolver este paso.

async function createUser(url, data) {
  // TU CÓDIGO AQUÍ ⬇️
    try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log("✅ Usuario creado:", result);
    return result; 
  } catch (err) {
    console.log("❌ Error:", err);
    throw err;
  }
};


//--------------------------------------------------
// 4. Multiple Choice sobre fetch()
//--------------------------------------------------

// 👉 Paso 11: ¿Cuál de estas afirmaciones sobre fetch() es verdadera?
// Comentá la opción correcta y guardá la letra en `respuestaFetch1`

let respuestaFetch1 = 'B';
// respuestaFetch1 = 'A'; fetch() bloquea el hilo principal hasta que termina.
// respuestaFetch1 = 'B'; fetch() devuelve una Promesa que se resuelve cuando se completa la petición.
// respuestaFetch1 = 'C'; fetch() solo funciona con peticiones GET.
// respuestaFetch1 = 'D'; fetch() requiere una librería externa para funcionar.


//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------

module.exports = { getUsers, createUser, respuestaFetch1 };
