export const datos = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Perú: "Lima",
    Colombia: "Bogotá",
    México: "Ciudad de México",
    Uruguay: "Montevideo",
    Paraguay: "Asunción",
    Bolivia: "Sucre",
    Ecuador: "Quito",
    Venezuela: "Caracas",
    EstadosUnidos: "Washington D.C.",
    Canadá: "Ottawa",
    Cuba: "La Habana",
    RepúblicaDominicana: "Santo Domingo"
};

export const cargarSelects = (selectPaises, selectCapitales) => {

    for (const pais in datos) {
        selectPaises.appendChild(new Option(pais, pais));
        selectCapitales.appendChild(new Option(datos[pais], datos[pais]));
    }
};

export const seleccionarCapital = (selectPaises, selectCapitales) => {

    const paisSeleccionado = selectPaises.value;
    const capital = datos[paisSeleccionado];

    selectCapitales.value = capital;

    console.log(`País seleccionado: ${paisSeleccionado}`);
    console.log(`Capital seleccionada: ${capital}`);
};