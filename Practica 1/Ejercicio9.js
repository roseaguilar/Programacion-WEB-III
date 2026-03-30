function miPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Exito");
        }, 3000); 
    });
}

miPromesa()
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(error => {
        console.log(error);
    });