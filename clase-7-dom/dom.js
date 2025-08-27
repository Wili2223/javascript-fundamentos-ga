// 🧠 Tema: DOM y Manipulación de Elementos 🖥️
// Instrucciones:
// - Abrí index.html en tu navegador y trabajá sobre este archivo.
// - Completá los pasos y respondé en comentarios donde se indique.
// - Este ejercicio no tiene test

//--------------------------------------------------
// 1. Fundamentos del DOM
//--------------------------------------------------

// 👉 Paso 1: ¿Qué es el DOM?
// Explicá qué significa "DOM" y qué representa dentro de una página web.

// TU RESPUESTA AQUÍ ⬇️
// El DOM (Document Object Model) es la representación en forma de árbol
// de todos los elementos HTML de una página, que permite acceder y 
// manipularlos con JavaScript.

// 👉 Paso 2: Diferencia entre window y document
// - Explicá qué representa cada uno y para qué se usan.

// TU RESPUESTA AQUÍ ⬇️
// window: Objeto global del navegador (ventana, alert, localStorage, etc.)
// document: Representa el contenido cargado en la ventana (HTML y sus nodos).

// 👉 Paso 3: ¿Qué es un nodo y cuáles son sus tipos más comunes?
// Ej: elemento, texto, comentario, etc.

// TU RESPUESTA AQUÍ ⬇️
// Un nodo es cada unidad dentro del DOM. Los más comunes son:
// - Elemento: etiquetas HTML (<div>, <p>, <button>)
// - Texto: contenido dentro de un elemento ("Hola mundo")
// - Comentario: notas en el código (<!-- comentario -->)

// 👉 Paso 4: ¿Qué es el Event Bubbling y Capturing?
// - Explicá en qué se diferencian y cómo afecta a los eventos en el DOM.

// TU RESPUESTA AQUÍ ⬇️
// - Bubbling: el evento se propaga desde el elemento más interno hacia afuera.
// - Capturing: el evento se propaga desde el elemento más externo hacia adentro.
// Por defecto, los eventos en el DOM usan Bubbling.

// 👉 Paso 5: Diferencia entre Local Storage y Session Storage
// - ¿Qué guardan? ¿Cuánto dura? ¿Para qué sirve cada uno?

// TU RESPUESTA AQUÍ ⬇️
// - Ambos guardan pares clave-valor en el navegador (máx. ~5MB).
// - LocalStorage: persiste aunque cierres el navegador.
// - SessionStorage: se borra al cerrar la pestaña/ventana.

// 👉 Paso 5: ¿Cuál es la diferencia entre innerText, textContent e innerHTML?
// Explicá cuándo usarías cada uno.

// TU RESPUESTA AQUÍ ⬇️
// - innerText: obtiene o cambia el texto visible (respeta estilos CSS).
// - textContent: obtiene o cambia TODO el texto, incluso el oculto (más rápido).
// - innerHTML: obtiene o cambia el HTML interno (incluye etiquetas).

// 👉 Paso 6: ¿Qué son los atributos y cómo podemos modificarlos con JS?
// Ejemplo: class, id, src, href, etc.

// TU RESPUESTA AQUÍ ⬇️
// Los atributos son propiedades extra de las etiquetas HTML (id, class, src, href, etc.).
// Se pueden leer, agregar o modificar con métodos de JS:

//--------------------------------------------------
// 2. Seleccionar y Modificar Elementos
//--------------------------------------------------

// 👉 Paso 7: Seleccioná el elemento con id "titulo" y cambiá su texto por "Mi Lista de Compras".
// TU CÓDIGO AQUÍ ⬇️
document.getElementById("titulo").textContent = "Mi Lista de Compras";

// 👉 Paso 8: Seleccioná todos los elementos con clase "item" y cambiá el texto del primero.
// TU CÓDIGO AQUÍ ⬇️
document.querySelectorAll(".item")[0].textContent = "Palta";

// 👉 Paso 9: Cambiá el color del título a azul y poné en negrita el segundo item.
// ✅ Tip: style.color / classList.add()
// TU CÓDIGO AQUÍ ⬇️
document.getElementById("titulo").style.color = "blue";
document.querySelectorAll(".item")[1].style.fontWeight = "bold";

// 👉 Paso 10: Agregá la clase "activo" al primer ítem
// TU CÓDIGO AQUÍ ⬇️
document.querySelectorAll(".item")[0].classList.add("activo");


//--------------------------------------------------
// 3. Crear y Eliminar Elementos
//--------------------------------------------------

// 👉 Paso 11: Creá un nuevo elemento <li> con el texto "Pan" y agregalo al final de la lista con id "lista-compras".
// ✅ Tip: document.createElement(), appendChild()

// TU CÓDIGO AQUÍ ⬇️
const nuevoItem = document.createElement("li");
nuevoItem.textContent = "Pan";
nuevoItem.classList.add("item")
document.getElementById("lista-compras").appendChild(nuevoItem);

// 👉 Paso 12: Eliminá el primer elemento <li> de la lista.
// ✅ Tip: removeChild()

// TU CÓDIGO AQUÍ ⬇️
const lista = document.getElementById("lista-compras");
lista.removeChild(lista.firstElementChild);

//--------------------------------------------------
// 4. Manejar Eventos
//--------------------------------------------------

// 👉 Paso 13: Seleccioná un botón con id "btn-cambiar-fondo" y al hacer click, cambiá el color de fondo del body.
// ✅ Tip: addEventListener("click", fn)

// TU CÓDIGO AQUÍ ⬇️
document.getElementById("btn-cambiar-fondo")
  .addEventListener("click", () => {
    localStorage.setItem("fondo", "red");
    document.body.style.backgroundColor = "red"
  } );

// 👉 Paso 14: Prevení que un enlace con id "link-google" navegue, y en cambio mostrale un alert().
// ✅ Tip: event.preventDefault()

// TU CÓDIGO AQUÍ ⬇️
document.getElementById("link-google")
  .addEventListener("click", e => {
    e.preventDefault();
    alert("Navegación bloqueada 🚫");
  });

// 👉 Paso 15: Usá delegación de eventos para que al hacer click en cualquier <li> de la lista, se elimine.
// ✅ Tip: event.target.tagName

// TU CÓDIGO AQUÍ ⬇️
document.getElementById("lista-compras")
  .addEventListener("click", e => {
    if (e.target.tagName === "LI") e.target.remove();
  });

//--------------------------------------------------
// 5. Consumo de API y mostrar datos en el DOM
//--------------------------------------------------

const formContacto = document.getElementById("form-ejemplo");

// 👉 Paso 16: Al enviar el formulario, prevení el comportamiento por defecto
// Obtené el nombre y el email, hacé un POST ficticio a https://jsonplaceholder.typicode.com/posts
// y mostrá la respuesta en un <p> debajo del formulario
// ✅ Tip: Puedes chequear la pagina para ejemplos en: https://jsonplaceholder.typicode.com/
// ✅ Tip: Usá fetch con método POST, escucha el evento submit, y envia por body con JSON.stringify()
// ✅ Tip: Envia en el body el nombre y email, y mostrá la respuesta en un <p> debajo del formulario.
// ✅ Tip: La respuesta deberas parsearla con .json()
// ✅ Tip: Envia un headers así:  headers: { 'Content-type': 'application/json; charset=UTF-8' }
// TU CÓDIGO AQUÍ ⬇️
formContacto.addEventListener("submit", async e => {
  e.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ nombre, email })
  });

  const data = await res.json();
  
  const p = document.createElement("p");
  p.textContent = `Respuesta: ID ${data.id}, Nombre: ${data.nombre}, Email: ${data.email}`;
  formContacto.appendChild(p);
});


//--------------------------------------------------
// 6. Bonus: Guardar datos en Local Storage
//--------------------------------------------------

// 👉 Paso 17: Guardá en localStorage el último color de fondo elegido para la página
// Al recargar, restaurá ese color automáticamente
// TU CÓDIGO AQUÍ ⬇️
document.body.style.backgroundColor = localStorage.getItem("fondo") || "#fff";

//--------------------------------------------------
// 7. Aplicación en tu Proyecto de Formularios
//--------------------------------------------------

// 👉 Paso 18: Abrí tu proyecto de formulario hecho en clases previas.
// - Cambiá el color del título principal usando JavaScript.
// - Cambiá el texto de al menos un label.
// - Cuando el usuario complete todos los campos y haga click en enviar, mostrá un mensaje en pantalla con los datos de los campos.
// - Agregá un botón que, al clickear, cambie el fondo del formulario.

// ✅ Tip: No modifiques el HTML original, hacé todos los cambios con JS.

// TU CÓDIGO AQUÍ ⬇️
// 1. Cambiar color del título
document.querySelector("h1").style.color = "blue";

// 2. Cambiar texto de un label
document.querySelector("label[for='nombre']").textContent = "Tu nombre completo:";

// 3. Mostrar datos al enviar
const form = document.getElementById("form-ejemplo");
form.addEventListener("submit", e => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(form));
  alert(`Datos enviados:\n${JSON.stringify(datos, null, 2)}`);
});

// 4. Botón para cambiar fondo del formulario
const btn = document.createElement("button");
btn.textContent = "Cambiar fondo";
form.appendChild(btn);

btn.addEventListener("click", e => {
  e.preventDefault();
  form.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});


//--------------------------------------------------
// 8. Multiple Choice sobre DOM
//--------------------------------------------------

// 👉 Paso 19: ¿Cuál de estas afirmaciones sobre el DOM es verdadera?
// Comentá la opción correcta y guardá la letra en `respuestaDOM1`

let respuestaDOM1 = "B";
// respuestaDOM1 = 'A'; El DOM es un archivo separado que el navegador descarga.
// respuestaDOM1 = 'B'; El DOM es una representación en memoria de la estructura HTML.
// respuestaDOM1 = 'C'; El DOM solo existe en Node.js.
// respuestaDOM1 = 'D'; El DOM no puede modificarse con JavaScript.


//--------------------------------------------------
// No modifiques el código debajo de este comentario
//--------------------------------------------------

module.exports = { respuestaDOM1 };
