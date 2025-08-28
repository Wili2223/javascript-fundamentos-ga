// 🧠 Tema: Funciones Constructoras 🚧

// Instrucciones:
// - Leé cada consigna y escribí tu código donde se indica.
// - Usá `console.log()` para mostrar los resultados cuando se indique.
// - Ejecutá este archivo con el comando: node 3-funciones-constructoras.js

//--------------------------------------------------
// 1. Función constructora básica
//--------------------------------------------------

// 👉 Paso 1: Creá una función constructora llamada Mascota que reciba nombre y especie, y asigne esas propiedades usando this.
function Mascota(nombre, especie) {

  if (!(this instanceof Mascota)) return new Mascota(nombre, especie);
  this.nombre = nombre;
  this.especie = especie;
}

// 👉 Paso 2: Usá la función constructora para crear dos mascotas: 'mascota1' (nombre: "Luna", especie: "perro") y 'mascota2' (nombre: "Milo", especie: "gato").
const mascota1 = new Mascota("Luna", "perro");
const mascota2 = new Mascota("Milo", "gato");

// 👉 Paso 3: Mostrá en consola el nombre y la especie de ambas mascotas.
console.log(mascota1); 
console.log(mascota2);

//--------------------------------------------------
// 2. Métodos en funciones constructoras
//--------------------------------------------------

// 👉 Paso 4: Agregá un método llamado 'presentarse' a Mascota usando el prototype, que retorne "Hola, soy [nombre] y soy un [especie]".
Mascota.prototype.presentarse = function() {
  return `Hola, soy ${this.nombre} y soy un ${this.especie}`;
};

// 👉 Paso 5: Mostrá en consola el resultado de llamar a mascota1.presentarse() y mascota2.presentarse().
console.log(mascota1.presentarse());
console.log(mascota2.presentarse());

//--------------------------------------------------
// 3. Algoritmos y práctica con funciones constructoras
//--------------------------------------------------

// 👉 Paso 6: Creá una función constructora llamada Libro que reciba título, autor y año, y asigne esas propiedades usando this.
function Libro(titulo, autor, año) {
  this.titulo = titulo;
  this.autor = autor;
  this.año = año;
}

// 👉 Paso 7: Agregá un método al prototype de Libro llamado 'resumen' que retorne un string con el formato: 
// "El libro [título] de [autor] fue publicado en [año]".
Libro.prototype.resumen = function() {
  return `El libro ${this.titulo} de ${this.autor} fue publicado en ${this.año}`;
};

// 👉 Paso 8: Creá un array llamado 'biblioteca' y agregá al menos 3 libros usando la función constructora.
const biblioteca = [
  new Libro("Cien años de soledad", "Gabriel García Márquez", 1967),
  new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605),
  new Libro("1984", "George Orwell", 1949)
];
// 👉 Paso 9: Usá map() para crear un array con los resúmenes de todos los libros de la biblioteca y guardalo en una variable llamada 'resumenesLibros'.
let resumenesLibros = biblioteca.map(libro => libro.resumen());

console.log(resumenesLibros);

//--------------------------------------------------
// 4. Selección de opción correcta
//--------------------------------------------------

// 👉 Paso 10: Seleccioná la opción correcta sobre funciones constructoras:
// Guardá la letra de la opción correcta en la variable 'respuestaConstructor1'.
// Opción A: Se usan con la palabra reservada new para crear objetos.
// Opción B: Solo sirven para crear arrays.
// Opción C: No pueden tener métodos.
let respuestaConstructor1 = 'A';

// 👉 Paso 11: Seleccioná la opción correcta sobre el uso de this en funciones constructoras:
// Guardá la letra de la opción correcta en la variable 'respuestaConstructor2'.
// Opción A: this se refiere al objeto global.
// Opción B: this se refiere al objeto que se está creando con new.
// Opción C: this siempre es undefined.
let respuestaConstructor2 = 'B';

//--------------------------------------------------
// 5. Práctica combinada
//--------------------------------------------------

// 👉 Paso 12: Creá una función llamada 'crearMascotasDesdeArray' que reciba un array de objetos con nombre y especie,
// y retorne un array de instancias de Mascota.
function crearMascotasDesdeArray(arr) {
  return arr.map(item => new Mascota(item.nombre, item.especie));
}

// 👉 Paso 13: Usá la función anterior con el array:
const arrayMascotas = [
  {nombre: "Rocky", especie: "perro"}, 
  {nombre: "Pelusa", especie: "gato"}
];

const mascotas = crearMascotasDesdeArray(arrayMascotas);

// Mostrá en consola el nombre y la especie de cada mascota creada.
mascotas.forEach(m => {
  console.log(`Nombre: ${m.nombre}, Especie: ${m.especie}`);
});
// No modifiques el código debajo de este comentario
module.exports = {
  Mascota,
  mascota1,
  mascota2,
  Libro,
  biblioteca,
  respuestaConstructor1,
  respuestaConstructor2,
  crearMascotasDesdeArray,
  resumenesLibros
};