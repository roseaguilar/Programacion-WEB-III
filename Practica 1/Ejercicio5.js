function miFuncion(texto) {
    texto = texto.toLowerCase();

    let invertir = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        invertir += texto[i];
    }

    return texto === invertir;
}

let band = miFuncion("oruro");
console.log(band); 

band = miFuncion("hola");
console.log(band); 