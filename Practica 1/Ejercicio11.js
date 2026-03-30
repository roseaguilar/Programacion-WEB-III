function obtenerUsuario() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Usuario: Rosa");
        }, 1000);
    });
}

function obtenerDatos(usuario) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(usuario + " - Datos obtenidos");
        }, 1000);
    });
}

function mostrarResultado(info) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(info + " - Proceso finalizado");
        }, 1000);
    });
}

obtenerUsuario()
    .then(res => {
        console.log(res);
        return obtenerDatos(res);
    })
    .then(res => {
        console.log(res);
        return mostrarResultado(res);
    })
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log("Error:", error);
    });