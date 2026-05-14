const colores=['#ff2c2c','#009900','#0000cc','#663366','#cc0099','#ffcc00'];
const body=document.querySelector('body');

export const cambiar_color=()=>{
    const indice= Math.floor(Math.random()*colores.length);
    body.style.backgroundColor=colores[indice];
    console.log(`Se cambio de color del fondo, COLOR ACTUAL: ${colores[indice]}`);
}