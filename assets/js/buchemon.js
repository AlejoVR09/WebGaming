let ataqueJugador;
let ataquePC;

function gameDevelop(){
    let btnSeleccion = document.getElementById('seleccion--buche');
    btnSeleccion.addEventListener('click',seleccionBuchemon);
    let btnFuego = document.getElementById('ataqueFuego');
    btnFuego.addEventListener('click',ataqueFuego);
    let btnAgua = document.getElementById('ataqueAgua');
    btnAgua.addEventListener('click',ataqueAgua);
    let btnTierra = document.getElementById('ataqueTierra');
    btnTierra.addEventListener('click',ataqueTierra); 

}

function seleccionBuchemon(){
    let inputTortita=document.getElementById('tortita');
    let inputBananin=document.getElementById('bananin');
    let inputPollito=document.getElementById('pollito');
    let spanBucheAliado=document.getElementById('bucheAliado');
    if(inputTortita.checked){
        spanBucheAliado.innerHTML='Tortita';
    }   
    else if(inputBananin.checked){
        spanBucheAliado.innerHTML="Bananin";
    }
    else if(inputPollito.checked){
        spanBucheAliado.innerHTML="Pollito";
    }
    else {
        alert("Seleccione un Buchemon");
    }

    seleccionBuchemonEnemigo();
}

function seleccionBuchemonEnemigo(){
    let bucheEnemigo=alet(1,3);
    let spanBucheEnemigo=document.getElementById('bucheEnemigo');
    if(bucheEnemigo==1){
        spanBucheEnemigo.innerHTML='Tortita';
    }   
    else if(bucheEnemigo==2){
        spanBucheEnemigo.innerHTML="Bananin";
    }
    else{
        spanBucheEnemigo.innerHTML="Pollito";
    }
}

function alet(min, max){
    return rand=Math.floor(Math.random()*(max-min+1)+1);
}

function ataqueFuego(){
    ataqueJugador='Fuego';
    ataqueEnemigo();
}

function ataqueAgua(){
    ataqueJugador='Agua';
    ataqueEnemigo();
}

function ataqueTierra(){
    ataqueJugador='Tierra';
    ataqueEnemigo();
}

function ataqueEnemigo(){
    let ataqueAleatorioEnemigo=alet(1,3);
    let spanAtaqueEnemigo=document.getElementById('');
    if(ataqueAleatorioEnemigo==1){
        ataquePC='Fuego';
    }   
    else if(ataqueAleatorioEnemigo==2){
        ataquePC="Agua";
    }
    else{
        ataquePC="Tierra";
    }

    fedback();
}

function fedback(){
    let sectionMensaje=document.getElementById('feedback');
    let parrafo=document.createElement('p');
    parrafo.innerHTML='Tu buchemon ataco con '+ataqueJugador+'. El buchemon enemigo ataco con '+ataquePC+' - '+playing()+' !';

    sectionMensaje.appendChild(parrafo)
}

function playing(jugador, maquina){
    if ((ataqueJugador == 'Fuego' && ataquePC == 'Tierra') || (ataqueJugador == 'Agua' && ataquePC == 'Fuego') || (ataqueJugador == 'Tierra' && ataquePC == 'Agua')) {
        return 'GANASTE'
    }
    else if (ataqueJugador == ataquePC) {
        return 'EMPATE'
    } 
    else {
        return 'PERDISTE'
    }
}

window.addEventListener('load',gameDevelop);
