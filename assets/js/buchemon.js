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
let mapaBackground =new Image();
mapaBackground.src= "https://static.platzi.com/media/user_upload/mokemap-ca51ea18-7ac8-492f-be96-6181d766a99d.jpg";    
let anchoTotal=window.innerWidth - 200;
let anchoMaximo=800;  
let alto= anchoTotal*600/800;
if (anchoTotal > anchoMaximo) {
    mapa.width=anchoMaximo;
    mapa.height=anchoMaximo*600/800;
} else {
    mapa.width=anchoTotal;
    mapa.height=alto;
}

/* Clases */

class Mokepon {
    constructor(nombre,foto,vida, fotoMapa){
        this.nombre =nombre;
        this.foto=foto;
        this.vida=vida;
        this.ataques=[];
        this.ancho=40
        this.largo=40
        this.x=alet(0,mapa.width - this.ancho);
        this.y=alet(0,mapa.height - this.largo);
        this.imagen=new Image();
        this.imagen.src=fotoMapa;
        this.velocidadX=0;
        this.velocidadY=0;
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.imagen,
            this.x,
            this.y,
            this.ancho,
            this.largo); 
    }
}


/* Instancias */

let hipodoge = new Mokepon('hipodoge',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png",3,'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/hipodoge.png')

let capipepo = new Mokepon('capipepo',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png",5,'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/capipepo.png')

let ratigueya = new Mokepon('ratigueya',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png",4,'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/ratigueya.png')

let Princesa = new Mokepon('Princesa',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png",4,'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/ratigueya.png')

let ratigueyaEnemiga = new Mokepon('ratigueya',"https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png",4,'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/ratigueya.png')


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

Princesa.ataques.push(
    { nombre: 'Fuego🔥', id: 'ataqueFuego' },
    { nombre: 'Fuego🔥', id: 'ataqueFuego' },
    { nombre: 'Fuego🔥', id: 'ataqueFuego' },
    { nombre: 'Agua💧', id: 'ataqueAgua' },
    { nombre: 'Tierra🌱', id: 'ataqueTierra' },
)

ratigueyaEnemiga.ataques.push(
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
let buchemonActual;
let buchemonEnemigo;
let ataquesEnemigo= [];
let ataqueJugador= [];
let ataquePC= [];
let vidasJugador;
let vidasPC;
let intervalo;

mokepones.push(hipodoge,capipepo,ratigueya,Princesa);


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

        mapaContainer.style.display="flex";
        iniciarMovmiento();

        sectionBuche.style.display="none";

        vidaAliada(buchemonJugador);
        extraerAtaques(buchemonJugador);
    } 
}

function seleccionBuchemonEnemigo(enemigo){
    // let bucheEnemigo=alet(1,mokepones.length);
    buchemonEnemigo=enemigo.nombre;
    spanBucheEnemigo.innerHTML=buchemonEnemigo;
    ataquesEnemigo=enemigo.ataques;
    vidasPC=enemigo.vida;
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
            buchemonActual=mokepones[i];
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

/* Mapa con canvas */
function iniciarMovmiento(){
    intervalo= setInterval(pintarCanvas,1);
    window.addEventListener('keydown',presionar);
    window.addEventListener('keyup',detenerMovimiento)
}

function pintarCanvas(){
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    buchemonActual.x=buchemonActual.x + buchemonActual.velocidadX;
    buchemonActual.y=buchemonActual.y + buchemonActual.velocidadY;
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    );
    buchemonActual.pintarMokepon();
    ratigueyaEnemiga.pintarMokepon();

    if (buchemonActual.velocidadX!==0 ||  buchemonActual.velocidadY!==0) {
        colisiones(ratigueyaEnemiga)
    }

}

function moverDerecha(){
    buchemonActual.velocidadX=5;
}

function moverAbajo(){
    buchemonActual.velocidadY=5;
}

function moverArriba(){
    buchemonActual.velocidadY= -5;
}

function moverIzquierda(){
    buchemonActual.velocidadX=-5;
}

function detenerMovimiento(){
    buchemonActual.velocidadX=0;
    buchemonActual.velocidadY=0;
}

function presionar(event){
    switch (event.key) {
        case 'w':
            moverArriba();
            break;
        case 's':
            moverAbajo();
            break;
        case 'd':
            moverDerecha();
            break;
        case 'a':
            moverIzquierda();
            break;
        default:
            break;
    }
}

function colisiones(enemigo){
    enemigoArriba=enemigo.y;
    enemigoAbajo=enemigo.y + enemigo.largo;
    enemigoDerecha=enemigo.x + enemigo.ancho;
    enemigoIzquierda=enemigo.x;

    jugadorArriba=buchemonActual.y;
    jugadorAbajo=buchemonActual.y + buchemonActual.largo;
    jugadorDerecha=buchemonActual.x + buchemonActual.ancho;
    jugadorIzquierda=buchemonActual.x;

    if (jugadorAbajo<enemigoArriba || jugadorArriba>enemigoAbajo || jugadorDerecha<enemigoIzquierda || jugadorIzquierda>enemigoDerecha) {
        return
    }
    else {
        clearInterval(intervalo)
        detenerMovimiento();
        sectionAtaque.style.display="flex";
        mapaContainer.style.display="none";
        seleccionBuchemonEnemigo(enemigo);
    }
}

window.addEventListener('load',gameDevelop);
