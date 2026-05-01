let nombres= [`sofia` ,`ana` ,`mia` ,`sole` ,`mica` ,`dani`];
let masLargo=``;

nombres.forEach(nombre => {
    console.log(nombre);

    if(nombre.length > masLargo.length ){
        masLargo=nombre;
    }
});
 console.log(`El mas largo es: ${masLargo}`);
