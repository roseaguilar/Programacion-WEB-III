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
            resolve();
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
async function ejecutarCompra() {
    try {
        let user = await validarUsuario();
        await procesarPago(user);
        await generarFactura();
        console.log("Compra finalizada");
    } catch (error) {
        console.log("Error:", error);
    }
}
ejecutarCompra();