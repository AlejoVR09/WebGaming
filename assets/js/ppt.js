var option1 = "Piedra";
var option2 = "Papel";
var option3 = "Tijera";

let player1="";
let player2="";
let contP=0;
let contPC=0;
let emp=0;
function alet(min, max){
    return rand=Math.floor(Math.random()*(max-min+1)+1);
}

function choose(chose){ 
    if (chose==1) {
        alert(option1)
        return option1;
    }
    else if (chose==2) {
        alert(option2)
        return option2;
    } 
    else if(chose==3) {
        alert(option3)
        return option3;
    }
    else{
        return "No";
    }
}

function gameDev(jugador, maquina){
    if ((jugador == option1 && maquina == option3) || (jugador == option2 && maquina == option1) || (jugador == option3 && maquina == option2)) {
        alert("Gana jugador");
        contP++;
    }
    else if (jugador == maquina) {
        alert("Empate");
        emp++;
    } 
    else {
        alert("Gana CPU");
        contPC++;
    }
}

while (contP<3 && contPC<3) {
    let player=prompt("Digite su arma: ");
    let pc=alet(1,3);
    player1=choose(player);
    player2=choose(pc);

    gameDev(player1,player2);
}
