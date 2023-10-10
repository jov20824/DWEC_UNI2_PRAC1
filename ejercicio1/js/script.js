var frase = prompt("Escriba una frase");

function darLaVuelta(palabras){
    var array = palabras.split("");

    return (array.reverse());
}
console.log(darLaVuelta(frase));