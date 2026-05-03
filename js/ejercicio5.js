const horas=[3,5,7,12,18,2,1,4];
const minutos=[10,45,30,60,18,9];
function convertirHorasASegundos(horas){
    for(let i=0; i < horas.length; i++){
        const seg= horas[i] * 3600;
        console.log(`${horas[i]}  horas = ${seg} segundos`);
    }
}
function convertirMinutosASegundos(minutos){
    for(let i=0;i<minutos.length;i++){
        const seg= minutos[i] * 60;
        console.log(`${minutos[i]} minutos = ${seg} segundos`);
    }
}
console.log(`Horas: ${horas}`);
convertirHorasASegundos(horas);
console.log(`Minutos: ${minutos}`);
convertirMinutosASegundos(minutos);