function miFuncion(arreglo) {
    let [a, b, ...resto] = arreglo;

    return resto;
}

let resultado = miFuncion([10, 20, 30, 40, 50]);
console.log(resultado);