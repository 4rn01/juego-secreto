let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
//se creao una lista en corchetes para tener un lugar de almacenamiento de los nuemros
let numeroMaximo = 5;

function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
    return;
    //seleciona un elemento que se va a mostarr en la pantalla la cual se automatiza sin necesidad de llamra a todas las etiquetas
    //titulo, parafo, etc.
}
function verificarIntento() { 
    //sale del codigo del html en parentecis para q sea una funcion y dar indicaciones d q hara, del onclick sale
    let numeroDeUsuario = parseInt(document.getElementById("numeroDeUsuario").value);
       
    console.log(intentos);


        if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        // comillas de costado ahcen q ingrese una funcion de codigo el ? es como if el : es como else

        document.getElementById('reiniciar').removeAttribute('disabled');
        // llama el input si aciertas el numero y lo activa de azul removiendo el atributo una vez acertado el numero
}
else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p','el numero es mayor');
        }
        else {
            asignarTextoElemento('p','el numero es menor');
        }
        intentos++;
        limpiarCaja();
//cuenta cuantas veces se realizo la accion intentos es codigo y ++ lo acumula en suma
}        return;
        //llama al input con su id para que se exacto el input selecionado
        // parseInt lo vuelve en numero el dato encerrado
}

function limpiarCaja () {
    document.querySelector('#numeroDeUsuario').value = '';
    //la funcion usa el numeral para llamar ID y le da el valor de vacio y en getelementbyid solo se escribe el ID
}



function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta en la lista se hace una operacio o otra


    //si ya se sorteo todos los numero entonces que se cierre 
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'ya sortemos todo');
    } else {



        if (listaNumeroSorteado.includes(numeroGenerado)) {
        //verifica si un valor ya se repitio o ya esta en la lista si no esta lo  manda para gregar en la lista push
        return generarNumeroSecreto();
        //recursividad la funcion se llama a si misma para validarse y devolver un valor q no se repitio
        //si el valor no es repetido entonces lo manda a q se genere como nuevo numero
        } else {
        listaNumeroSorteado.push(numeroGenerado);
        //agrega a la lista el numero q salio o elemento q se genero por funcion o etc. guarda el numero que se creo
        return numeroGenerado;
        //
        }}
}

function condicionInicial() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    //se llama con el codigo elementoHTML lo que simplifica parano llamar uno por uno y repetir el let e inner dos veces apra llamra  acada  uno
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log (numeroSecreto);
}

function nuevoJuego () {
    // el nuevo juego viene del boton onclick del html si no esta igual no se activa el boton y en parentecis en el html para q se
    //reconosca como funcion
    //limpiar caja =input
    limpiarCaja	();
    //indicar mensaje de intervalo de numero
    condicionInicial();
    //generarl el numero aleaotorio
    //iniciar el numero de intentos
    //deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionInicial();
// se pone afuer para q llame apenas entrando al juego y la funcion hace q aparesca de nuevo una vez acertado el numero
// y si no se pone fuera no aparecera el texto porq no tendra algo para llamar




