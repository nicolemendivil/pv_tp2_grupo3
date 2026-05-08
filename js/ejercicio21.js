import { cargarSelects, seleccionarCapital } from './funciones21.js';

const selectPaises = document.querySelector(`#paises`);
const selectCapitales = document.querySelector(`#capitales`);

cargarSelects(selectPaises, selectCapitales);

selectPaises.addEventListener(`change`, () => {
    seleccionarCapital(selectPaises, selectCapitales);
});