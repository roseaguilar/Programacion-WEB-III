function miFuncion(arreglo) {
    let resultado = {
        pares: [],
        impares: []
    };

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            resultado.pares.push(arreglo[i]);
        } else {
            resultado.impares.push(arreglo[i]);
        }
    }

    return resultado;
}

// Prueba
let obj = miFuncion([1, 2, 3, 4, 5]);
console.log(obj);