import { mostrarLenguaje } from "./mostrarLenguaje.js";
const parrafo = document.getElementById('descripcion');
const opciones = document.querySelectorAll('input[name="lenguaje"]');

opciones.forEach(opcion => {
    opcion.addEventListener('change', (event) => {
        const valor = event.target.value;
        mostrarLenguaje(parrafo,valor);
    });
});