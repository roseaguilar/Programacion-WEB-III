function obtenerDatos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 2000);
    });
}

obtenerDatos()
    .then(res => console.log(res))
    .catch(err => console.log("Error:", err));

async function ejecutar() {
    try {
        let res = await obtenerDatos();
        console.log(res);
    } catch (err) {
        console.log("Error:", err);
    }
}

ejecutar();