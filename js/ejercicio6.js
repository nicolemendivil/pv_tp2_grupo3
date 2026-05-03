const edades=[4,8,15,78,9,36,10,27,65];
let suma=0;

for(let i=0 ;i < edades.length ; i++){
    console.log(`Edad: ${edades[i]}`);
    suma = suma + edades[i];
}
let promedio=0;
promedio=suma/edades.length;
console.log(`Promedio de las edades: ${promedio}`);