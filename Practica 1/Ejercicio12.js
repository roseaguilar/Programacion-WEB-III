function validarUsuario() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Usuario validado");
            resolve("usuario123");
        }, 1000);
    });
}

function procesarPago(usuario) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Pago procesado para " + usuario);
            resolve("pagoOK");
        }, 1000);
    });
}

function generarFactura() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Factura generada");
            resolve();
        }, 1000);
    });
}

validarUsuario()
    .then(user => {
        return procesarPago(user);
    })
    .then(() => {
        return generarFactura();
    })
    .then(() => {
        console.log("Compra finalizada");
    })
    .catch(error => {
        console.log("Error:", error);
    });