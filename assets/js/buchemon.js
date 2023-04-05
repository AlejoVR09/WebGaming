/* Funciones */


/* Botones */
const btnSeleccion = document.getElementById('seleccion-buche');
const btnReload = document.getElementById('btnReload');
let btnFuego;
let btnAgua;
let btnTierra;

/* Buchemones */
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;


/* Componentes */
const sectionAtaque=document.getElementById('seleccion-ataque');
const sectionBuche=document.getElementById('seleccion--buche');
const seleccionTarjeta=document.getElementById('seleccionTarjeta');
const spanBucheAliado=document.getElementById('bucheAliado');
const spanBucheEnemigo=document.getElementById('bucheEnemigo');
const spanBucheAliadoVida=document.getElementById('bucheAliadoVida');
const spanBucheEnemigoVida=document.getElementById('bucheEnemigoVida');
const sectionMensaje=document.getElementById('notificacion');
const sectionReload=document.getElementById('reiniciar')
const ataquePlayer=document.getElementById('ataqueJugador');
const ataqueMaquina=document.getElementById('ataqueEnemigo');
const ataqueContainer=document.getElementById('ataqueContainer');

/* Variables */
let mokepones = [];
let buchemonJugador;
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


hipodoge.ataques.push(
    { nombre: 'Agua💧', id: 'ataqueAgua' },
    { nombre: 'Agua💧', id: 'ataqueAgua' },
    { nombre: 'Agua💧', id: 'ataqueAgua' },
    { nombre: 'Fuego🔥', id: 'ataqueFuego' },
    { nombre: 'Tierra🌱', id: 'ataqueTierra' },
)

capipepo.ataques.push(
    { nombre: 'Tierra🌱', id: 'ataqueTierra' },
    { nombre: 'Tierra🌱', id: 'ataqueTierra' },
    { nombre: 'Tierra🌱', id: 'ataqueTierra' },
    { nombre: 'Agua💧', id: 'ataqueAgua' },
    { nombre: 'Fuego🔥', id: 'ataqueFuego' },
    
)

ratigueya.ataques.push(
    { nombre: 'Fuego🔥', id: 'ataqueFuego' },
    { nombre: 'Fuego🔥', id: 'ataqueFuego' },
    { nombre: 'Fuego🔥', id: 'ataqueFuego' },
    { nombre: 'Agua💧', id: 'ataqueAgua' },
    { nombre: 'Tierra🌱', id: 'ataqueTierra' },
)

mokepones.push(hipodoge,capipepo,ratigueya);

/* Funciones de desarrollo */
function gameDevelop(){
    sectionAtaque.style.display="none"
    sectionReload.style.display='none'

    mokepones.forEach((mokepon) =>{
        let data= `
        <input type="radio" name="buchemon" id=${mokepon.nombre} />
        <label class="seleccion_container--tarjeta" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre} >
        </label>`;

        seleccionTarjeta.innerHTML+=data;

        
    });    
    inputHipodoge=document.getElementById('hipodoge');
    inputCapipepo=document.getElementById('capipepo');
    inputRatigueya=document.getElementById('ratigueya'); 

    btnSeleccion.addEventListener('click',seleccionBuchemon);
 
    btnReload.addEventListener('click',reloadPage);



}

function seleccionBuchemon(){
    if(inputHipodoge.checked==false && inputRatigueya.checked==false && inputCapipepo.checked==false){
        alert("Seleccione un Buchemon"); 
    }   
    else{
        if(inputHipodoge.checked){
            spanBucheAliado.innerHTML=inputHipodoge.id;
            buchemonJugador=inputHipodoge.id;
        }
        else if(inputCapipepo.checked){
            spanBucheAliado.innerHTML=inputCapipepo.id;
            buchemonJugador=inputCapipepo.id;
        }
        else if(inputRatigueya.checked){
            spanBucheAliado.innerHTML=inputRatigueya.id;
            buchemonJugador=inputRatigueya.id;
        }
        
        sectionAtaque.style.display="flex"
        sectionBuche.style.display="none"

        extraerAtaques(buchemonJugador);
        seleccionBuchemonEnemigo();
    } 
}

function seleccionBuchemonEnemigo(){
    let bucheEnemigo=alet(1,mokepones.length);
    spanBucheEnemigo.innerHTML= mokepones[bucheEnemigo-1].nombre;
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

function extraerAtaques(buchemonJugador){
    let ataquesJugador;
    for (let i = 0; i < mokepones.length; i++) {
        if (buchemonJugador===mokepones[i].nombre) {
            ataques=mokepones[i].ataques;
            
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    
    ataques.forEach((ataque) =>{
        let ataquePropio= `<button class="ataque_container--button" id=${ataque.id}>${ataque.nombre}</button>`

        ataqueContainer.innerHTML+=ataquePropio;
        
    });   
    btnFuego = document.getElementById('ataqueFuego');
    btnAgua = document.getElementById('ataqueAgua');
    btnTierra = document.getElementById('ataqueTierra');
    btnFuego.addEventListener('click',ataqueFuego);
    btnAgua.addEventListener('click',ataqueAgua);
    btnTierra.addEventListener('click',ataqueTierra);


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
