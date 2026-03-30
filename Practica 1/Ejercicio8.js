function Callback(callback) {
    setTimeout(function() {
        callback();
    }, 2000); 
}

function miCallback() {
    console.log("Se ejecutó 2 segundos");
}

Callback(miCallback);