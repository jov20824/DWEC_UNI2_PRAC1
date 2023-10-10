var numero = prompt("Indique la cantidad de décimos a generar");

function generaAleatorio(min,max){
    return Math.round(Math.random() * (max - min + 1) + min);
}
function generaNAleatorio(num,min,max){
    let listaNumeros = [];
    for (let i=0;i<num;i++){
        listaNumeros += generaAleatorio(min,max);
    }
    for (let i=0;i<99999;i++){
        let numero = Math.round(Math.random() * (max - min + 1) + min);
        if (listaNumeros.includes(numero)){
            console.log("Ha coincidido el numero "+numero+" en el intento "+i);
            break;
        }
    }
}
generaNAleatorio(numero,1,99999);