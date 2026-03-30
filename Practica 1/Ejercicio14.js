function obtenerDatosCallback(callback) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 2000);
    })
    .then(resultado => callback(null, resultado))
    .catch(error => callback(error, null));
}

obtenerDatosCallback((error, resultado) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log(resultado);
    }
});