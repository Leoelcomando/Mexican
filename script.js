const datos = {
    "Mole": ["Puebla", "Oaxaca", "Guerrero"],
    "Mariachi": ["Jalisco", "Michoacán", "Nayarit"],
    "Carnitas": ["Michoacán", "Guanajuato"],
    "Tamales": ["Veracruz", "Ciudad de México", "Oaxaca"],
    "Pozole": ["Guerrero", "Jalisco", "Sinaloa"],
    "Espaguetti": ["Italia"],
};

function buscar() {
    const termino = document.getElementById("busqueda").value.trim();
    const resultadoDiv = document.getElementById("resultados");

    if (termino === "") {
        resultadoDiv.innerHTML = "<p>Por favor, ingresa un término de búsqueda.</p>";
        return;
    }

    const estados = datos[termino];
    if (estados) {
        resultadoDiv.innerHTML = `<p>${termino} se encuentra en: ${estados.join(", ")}</p>`;
    } else {
        resultadoDiv.innerHTML = "<p>No se encontraron coincidencias.</p>";
    }
}
