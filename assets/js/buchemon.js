let ataqueJugador;
let ataquePC;
let vidasJugador=3;
let vidasPC=3;


function gameDevelop(){
    let sectionAtaque=document.getElementById('seleccion-ataque')
    sectionAtaque.style.display="none"
    let sectionReinicio=document.getElementById('reiniciar')
    sectionReinicio.style.display='none'

    let btnSeleccion = document.getElementById('seleccion-buche');
    btnSeleccion.addEventListener('click',seleccionBuchemon);
    let btnFuego = document.getElementById('ataqueFuego');
    btnFuego.addEventListener('click',ataqueFuego);
    let btnAgua = document.getElementById('ataqueAgua');
    btnAgua.addEventListener('click',ataqueAgua);
    let btnTierra = document.getElementById('ataqueTierra');
    btnTierra.addEventListener('click',ataqueTierra); 
    let btnReload = document.getElementById('btnReload');
    btnReload.addEventListener('click',reloadPage);

}

function seleccionBuchemon(){
    let inputHipodoge=document.getElementById('hipodoge');
    let inputCapipepo=document.getElementById('capipepo');
    let inputRatigueya=document.getElementById('ratigueya');
    let spanBucheAliado=document.getElementById('bucheAliado');
    if(inputHipodoge.checked==false && inputRatigueya.checked==false && inputCapipepo.checked==false){
        alert("Seleccione un Buchemon"); 
    }   
    else{
        if(inputHipodoge.checked){
            spanBucheAliado.innerHTML='Hipodoge';
        }
        else if(inputCapipepo.checked){
            spanBucheAliado.innerHTML="Capipepo";
        }
        else if(inputRatigueya.checked){
            spanBucheAliado.innerHTML="Ratigueya";
        }
        let sectionAtaque=document.getElementById('seleccion-ataque')
        sectionAtaque.style.display="flex"
        let sectionBuche=document.getElementById('seleccion--buche')
        sectionBuche.style.display="none"
        seleccionBuchemonEnemigo();
    } 
}

function seleccionBuchemonEnemigo(){
    let bucheEnemigo=alet(1,3);
    let spanBucheEnemigo=document.getElementById('bucheEnemigo');
    if(bucheEnemigo==1){
        spanBucheEnemigo.innerHTML='Hipodoge';
    }   
    else if(bucheEnemigo==2){
        spanBucheEnemigo.innerHTML="Capipepo";
    }
    else{
        spanBucheEnemigo.innerHTML="Ratigueya";
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

    playing();
}

function fedback(resultado){
    let sectionMensaje=document.getElementById('notificacion');
    let ataquePlayer=document.getElementById('ataqueJugador');
    let ataqueMaquina=document.getElementById('ataqueEnemigo');
    
    let nuevoAtaqueJugador=document.createElement('p');
    let nuevoAtaqueEnemigo=document.createElement('p');

    sectionMensaje.innerHTML=resultado;
    nuevoAtaqueJugador.innerHTML=ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML=ataquePC;
    

    ataquePlayer.appendChild(nuevoAtaqueJugador);
    ataqueMaquina.appendChild(nuevoAtaqueEnemigo);

}

function playing(jugador, maquina){   
    let spanBucheAliadoVida=document.getElementById('bucheAliadoVida');
    let spanBucheEnemigoVida=document.getElementById('bucheEnemigoVida');
    if ((ataqueJugador == 'Fuego' && ataquePC == 'Tierra') || (ataqueJugador == 'Agua' && ataquePC == 'Fuego') || (ataqueJugador == 'Tierra' && ataquePC == 'Agua')) {
        spanBucheEnemigoVida.innerHTML=--vidasPC;
        fedback('Ganaste')
    }
    else if (ataqueJugador == ataquePC) {
        fedback('Empate')
    } 
    else {
        spanBucheAliadoVida.innerHTML=--vidasJugador;
        fedback('Perdiste')
    }

    revisarVidas();
}

function fedbackVidas(resultadoFinal){
    let sectionMensaje=document.getElementById('notificacion');
    
    sectionMensaje.innerHTML=resultadoFinal

    let btnFuego = document.getElementById('ataqueFuego');
    btnFuego.disabled=true;
    let btnAgua = document.getElementById('ataqueAgua');
    btnAgua.disabled=true;
    let btnTierra = document.getElementById('ataqueTierra');
    btnTierra.disabled=true;
    let sectionReload=document.getElementById('reiniciar')
    sectionReload.style.display="block"

}

function revisarVidas(){
    if (vidasJugador==0) {
        fedbackVidas("Perdiste por gei!");
    } else if (vidasPC==0) {    
        fedbackVidas("Felicidades Ganaste!!!");
    }
}

function reloadPage(){
    location.reload();
}
window.addEventListener('load',gameDevelop);
