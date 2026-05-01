let notas= [6,7,3,5,2,9,12,45,33,22];
let aprobadas=0;
let suma=0;
//recorrer y mostar todas las notas
console.log(`Todas las notas: `);
notas.forEach(nota => {
    console.log(nota);
    suma+=nota;
});
//mostrat Probadas
console.log(`Aprobadas: `);
notas.forEach(nota => {
    if(nota >= 6 ){
        console.log(nota);
        aprobadas++;    
    }
});
//mostrar desaprobadas 
console.log(`Desaprobadas: `);
notas.forEach(nota => {
    if(nota<6){
       console.log(nota);
    }
});

let promedio=suma/notas.length;

console.log(`Promedio: ${promedio}`);
console.log(`Cantidad de notas Aprobadas: ${aprobadas}`);
