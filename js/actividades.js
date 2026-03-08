let alimentoSeleccionado = null;

function seleccionar(elemento){

if(alimentoSeleccionado === elemento){

elemento.classList.remove("seleccionado");
alimentoSeleccionado = null;
return;

}

if(alimentoSeleccionado){
alimentoSeleccionado.classList.remove("seleccionado");
}

elemento.classList.add("seleccionado");
alimentoSeleccionado = elemento;

}

document.addEventListener("click", function(e){

if(!e.target.classList.contains("alimento")){

if(alimentoSeleccionado){
alimentoSeleccionado.classList.remove("seleccionado");
alimentoSeleccionado = null;
}

}

});
