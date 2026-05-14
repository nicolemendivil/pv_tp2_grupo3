import { mostrarLenguaje } from "./funciones24.js";

const parrafo = document.getElementById('descripcion');
const formulario = document.getElementById('mostrarLenguaje');

formulario.addEventListener('change', (event) => {
    const valor = event.target.value;
    mostrarLenguaje(parrafo, valor);

});