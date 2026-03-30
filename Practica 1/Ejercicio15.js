function obtenerDatosCallback(callback) {
    setTimeout(() => {
        callback(null, "Datos obtenidos");
    }, 2000);
}

function obtenerDatosPromesa() {
    return new Promise((resolve, reject) => {
        obtenerDatosCallback((error, resultado) => {
            if (error) {
                reject(error);
            } else {
                resolve(resultado);
            }
        });
    });
}

obtenerDatosPromesa()
    .then(res => console.log(res))
    .catch(err => console.log("Error:", err));