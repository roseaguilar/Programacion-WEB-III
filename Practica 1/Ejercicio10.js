console.log("¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una promesa? ");
console.log("Callback → simple pero se vuelve desordenado si hay muchos pasos");
console.log("Promesas → mejor organización y manejo de errores");
console.log("Ejemplo de anidacion con callback");
function paso1(callback) {
    setTimeout(() => {
        console.log("Paso 1");
        callback();
    }, 1000);
}

function paso2(callback) {
    setTimeout(() => {
        console.log("Paso 2");
        callback();
    }, 1000);
}

function paso3(callback) {
    setTimeout(() => {
        console.log("Paso 3");
        callback();
    }, 1000);
}
paso1(() => {
    paso2(() => {
        paso3(() => {
            console.log("Proceso terminado");
        });
    });
});
console.log("Ejemplo de anidacion con Promesas");
function paso1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1");
            resolve();
        }, 1000);
    });
}

function paso2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2");
            resolve();
        }, 1000);
    });
}

function paso3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3");
            resolve();
        }, 1000);
    });
}
paso1()
    .then(() => paso2())
    .then(() => paso3())
    .then(() => console.log("Proceso terminado"));