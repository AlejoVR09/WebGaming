/* Funciones */


/* Botones */
const btnSeleccion = document.getElementById('seleccion-buche');
const btnFuego = document.getElementById('ataqueFuego');
const btnAgua = document.getElementById('ataqueAgua');
const btnTierra = document.getElementById('ataqueTierra');
const btnReload = document.getElementById('btnReload');




/* Buchemones */
const inputHipodoge=document.getElementById('hipodoge');
const inputCapipepo=document.getElementById('capipepo');
const inputRatigueya=document.getElementById('ratigueya');


/* Componentes */
const sectionAtaque=document.getElementById('seleccion-ataque')
const sectionBuche=document.getElementById('seleccion--buche')
const spanBucheAliado=document.getElementById('bucheAliado');
const spanBucheEnemigo=document.getElementById('bucheEnemigo');
const spanBucheAliadoVida=document.getElementById('bucheAliadoVida');
const spanBucheEnemigoVida=document.getElementById('bucheEnemigoVida');
const sectionMensaje=document.getElementById('notificacion');
const sectionReload=document.getElementById('reiniciar')
const ataquePlayer=document.getElementById('ataqueJugador');
const ataqueMaquina=document.getElementById('ataqueEnemigo');

/* Variables */
let mokepones = [];
let ataqueJugador;
let ataquePC;
let vidasJugador=3;
let vidasPC=3;

/* Clases */

class Mokepon {
    constructor(nombre,foto,vida){
        this.nombre =nombre;
        this.foto=foto;
        this.vida=vida;
        this.ataques=[];
    }
}


/* Instancias */

let hipodoge = new Mokepon('hipodoge',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png",5)

let capipepo = new Mokepon('capipepo',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png",5)

let ratigueya = new Mokepon('ratigueya',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png",5)

mokepones.push(hipodoge,capipepo,ratigueya);

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)



/* Funciones de desarrollo */
function gameDevelop(){
    sectionAtaque.style.display="none"
    sectionReload.style.display='none'

    btnSeleccion.addEventListener('click',seleccionBuchemon);

    btnFuego.addEventListener('click',ataqueFuego);
    btnAgua.addEventListener('click',ataqueAgua);
    btnTierra.addEventListener('click',ataqueTierra); 
    btnReload.addEventListener('click',reloadPage);

}

function seleccionBuchemon(){
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
        
        sectionAtaque.style.display="flex"
        
        sectionBuche.style.display="none"
        seleccionBuchemonEnemigo();
    } 
}

function seleccionBuchemonEnemigo(){
    let bucheEnemigo=alet(1,3);
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
/* Funciones de ataque */

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

function playing(jugador, maquina){   
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

/* Funciones de mensajes */


function fedback(resultado){
    let nuevoAtaqueJugador=document.createElement('p');
    let nuevoAtaqueEnemigo=document.createElement('p');

    sectionMensaje.innerHTML=resultado;
    nuevoAtaqueJugador.innerHTML=ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML=ataquePC;
    

    ataquePlayer.appendChild(nuevoAtaqueJugador);
    ataqueMaquina.appendChild(nuevoAtaqueEnemigo);

}

function fedbackVidas(resultadoFinal){
    sectionMensaje.innerHTML=resultadoFinal

    btnFuego.disabled=true;
    btnAgua.disabled=true;
    btnTierra.disabled=true;
    
    sectionReload.style.display="block"

}


/* Funciones auxiliares */
function alet(min, max){
    return rand=Math.floor(Math.random()*(max-min+1)+1);
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
