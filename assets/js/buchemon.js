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
const mapaContainer=document.getElementById('mapaContainer');

/* Mapa */
const mapa=document.getElementById('mapa');
let lienzo = mapa.getContext('2d');

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

let hipodoge = new Mokepon('hipodoge',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png",3)

let capipepo = new Mokepon('capipepo',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png",5)

let ratigueya = new Mokepon('ratigueya',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png",4)


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
/* Variables */
let mokepones = [];
let botones= [];
let buchemonJugador;
let buchemonEnemigo;
let ataquesEnemigo= [];
let ataqueJugador= [];
let ataquePC= [];
let vidasJugador;
let vidasPC;

mokepones.push(hipodoge,capipepo,ratigueya);


/* Funciones de desarrollo */
function gameDevelop(){
    sectionAtaque.style.display="none";
    sectionReload.style.display='none';
    mapaContainer.style.display='none';

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

        // sectionAtaque.style.display="flex"
        mapaContainer.style.display="flex"
        let caradeCapipepo =new Image();
        caradeCapipepo.src=capipepo.foto;
        lienzo.drawImage(caradeCapipepo,
            5,
            15,
            100,
            100);
        
        sectionBuche.style.display="none"

        vidaAliada(buchemonJugador)
        extraerAtaques(buchemonJugador);
        seleccionBuchemonEnemigo();
    } 
}

function seleccionBuchemonEnemigo(){
    let bucheEnemigo=alet(1,mokepones.length);
    buchemonEnemigo=mokepones[bucheEnemigo-1].nombre;
    spanBucheEnemigo.innerHTML= mokepones[bucheEnemigo-1].nombre;
    ataquesEnemigo=mokepones[bucheEnemigo-1].ataques;
    vidasPC=mokepones[bucheEnemigo-1].vida;
    spanBucheEnemigoVida.innerHTML=vidasPC;
    dinamismoAtaques();

}

/* Funciones de ataque */
// function ataqueFuego(){
//     ataqueJugador='Fuego';
//     ataqueEnemigo();
// }

// function ataqueAgua(){
//     ataqueJugador='Agua';
//     ataqueEnemigo();
// }

// function ataqueTierra(){
//     ataqueJugador='Tierra';
//     ataqueEnemigo();
// }

function ataqueEnemigo(){
    let ataqueAleatorioEnemigo=alet(1,ataquesEnemigo.length-1);
    ataquePC.push(ataquesEnemigo[ataqueAleatorioEnemigo].nombre)

    combate();
}

function combate(){
    if (ataqueJugador.length==5) {
        playing();
    }
}

function playing(jugador, maquina){   
    for (let i = 0; i <5; i++) {
        if ((ataqueJugador[i] == 'Fuego🔥' && ataquePC[i] == 'Tierra🌱') || (ataqueJugador[i] == 'Agua💧' && ataquePC[i] == 'Fuego🔥') || (ataqueJugador[i] == 'Tierra🌱' && ataquePC[i] == 'Agua💧')) {
            spanBucheEnemigoVida.innerHTML=--vidasPC;
            fedback('Ganaste',ataqueJugador[i],ataquePC[i])
        }
        else if (ataqueJugador[i] == ataquePC[i]) {
            fedback('Empate',ataqueJugador[i],ataquePC[i])
        } 
        else {
            spanBucheAliadoVida.innerHTML=--vidasJugador;
            fedback('Perdiste',ataqueJugador[i],ataquePC[i])
        }
        if (vidasJugador<=0 || vidasPC<=0) {
            revisarVidas();
        }
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
        let ataquePropio= `<button class="ataque_container--button BAtaque" id=${ataque.id}>${ataque.nombre}</button>`
        ataqueContainer.innerHTML+=ataquePropio;
        
    });   
    btnFuego = document.getElementById('ataqueFuego');
    btnAgua = document.getElementById('ataqueAgua');
    btnTierra = document.getElementById('ataqueTierra');
    botones=document.querySelectorAll('.BAtaque')
}

function dinamismoAtaques(){
    botones.forEach((boton)=> {
        boton.addEventListener('click', (e)=>{
            if (e.target.textContent==="Fuego🔥") {
                ataqueJugador.push("Fuego🔥")
                boton.style.background= '#112f58';
                boton.disabled=true;
            }
            else if (e.target.textContent==="Agua💧") {
                ataqueJugador.push("Agua💧")
                boton.style.background= '#112f58';
                boton.disabled=true;
            }
            else{
                ataqueJugador.push('Tierra🌱')
                boton.disabled=true;
                boton.style.background= '#112f58';
            }
            ataqueEnemigo();
        });
    });
}


/* Funciones de mensajes */
function fedback(resultado,turnoJugador,turnoPC){
    let nuevoAtaqueJugador=document.createElement('p');
    let nuevoAtaqueEnemigo=document.createElement('p');

    sectionMensaje.innerHTML=resultado;
    nuevoAtaqueJugador.innerHTML=turnoJugador;
    nuevoAtaqueEnemigo.innerHTML=turnoPC;
    

    ataquePlayer.appendChild(nuevoAtaqueJugador);
    ataqueMaquina.appendChild(nuevoAtaqueEnemigo);

}

function fedbackVidas(resultadoFinal){
    sectionMensaje.innerHTML=resultadoFinal    
    sectionReload.style.display="block"

}

/* Funciones auxiliares */
function alet(min, max){
    return rand=Math.floor(Math.random()*(max-min+1)+1);
}

function revisarVidas(){
    if (vidasJugador==vidasPC) {
        fedbackVidas("EMPATEEE");
    }
    else if (vidasJugador==0 || vidasJugador<vidasPC) {
        fedbackVidas("Perdiste por gei!");
    } else if (vidasPC==0 || vidasJugador>vidasPC) {    
        fedbackVidas("Felicidades Ganaste!!!");
    }
}

function vidaAliada(buchemon){
    for (let i = 0; i < mokepones.length; i++) {
        if(buchemon==mokepones[i].nombre){
            vidasJugador=mokepones[i].vida;
            spanBucheAliadoVida.innerHTML=vidasJugador;
        }
    }
}

function reloadPage(){
    location.reload();
}

window.addEventListener('load',gameDevelop);
