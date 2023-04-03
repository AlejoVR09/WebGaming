function gameDevelop(){
    let btnSeleccion = document.getElementById('seleccion--buche');
    btnSeleccion.addEventListener('click',seleccionBuchemon);
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

window.addEventListener('load',gameDevelop);
