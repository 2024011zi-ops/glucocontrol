let seleccion = null;

function seleccionar(elemento){

if(seleccion === elemento){

elemento.classList.remove("seleccionado");
seleccion = null;
return;

}

if(seleccion){
seleccion.classList.remove("seleccionado");
}

elemento.classList.add("seleccionado");
seleccion = elemento;

}

function limpiarSeleccion(){

if(seleccion){
seleccion.classList.remove("seleccionado");
seleccion = null;
}

}

document.addEventListener("click", function(e){

if(!e.target.closest(".imagenActividad")){
limpiarSeleccion();
}

});
