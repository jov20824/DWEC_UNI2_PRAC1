var equipos = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,17,18,19);
var equiposs = new Array("At.Madrid","Real Madrid","FC Barcelona","Sevilla",
"Betis","Granada","Oviedo","Sporting","Alavés", "Celta","Villareal","Getafe","Espanyol",
"Málaga","At.Bilbao","Rayo Vallecano","Osasuna","Mallora","Cádiz","Levante");

for (let i=0;i<equipos.length;i++){
    equipos[i]= new Array(20);
}

function generaSimbolos(){
    let listaSimbolos = ["X",1,2];
    let aleatorio = Math.round(Math.random()*2);
    console.log(aleatorio);
    return listaSimbolos[aleatorio];
}
function generaResultados(teams){

    for (let i=0;i<teams.length;i++){
        for(let j=0;j<teams.length;j++){
            if (j==i){
                teams[i][j]="-";
            }else{
                teams[i][j]=generaSimbolos();
            }
        }
    }
    return teams;
}
function pedirEquipos(quini){
    var salir = false;
    do{
        let equ1 = prompt("Equipo 1 (Escriba salir para dejar de dar equipos)");
        if (equ1=="salir"){
            salir=true;
            break;
        }

        let equ2 = prompt("Equipo 2 (Escriba salir para dejar de dar equipos)");

        if (equ2=="salir"){
            salir=true;
            break;
        }
        let resultado = quini[equiposs.indexOf(equ1)][equiposs.indexOf(equ2)];
        console.log("El resultado del partido "+equ1+" vs "+equ2+" es "+resultado);
    }while(!salir);
        
}


var quiniela = generaResultados(equipos);
console.table(quiniela);
pedirEquipos(quiniela);