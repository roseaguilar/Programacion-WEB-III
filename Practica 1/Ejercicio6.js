function miFuncion(arreglo) {
    let [a, b] = arreglo;

    return { a, b };
}

let obj = miFuncion([10, 20, 30, 40]);
console.log(obj);