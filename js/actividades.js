// selección de alimentos

let alimentoSeleccionado = null;

document.querySelectorAll(".alimento").forEach(function(alimento){

alimento.addEventListener("click", function(e){

e.stopPropagation();

// si ya está seleccionado se deselecciona

if(alimentoSeleccionado === this){

this.classList.remove("seleccionado");
alimentoSeleccionado = null;
return;

}

// quitar selección anterior

if(alimentoSeleccionado){
alimentoSeleccionado.classList.remove("seleccionado");
}

// seleccionar nuevo

this.classList.add("seleccionado");
alimentoSeleccionado = this;

});

});

// clic fuera para deseleccionar

document.addEventListener("click", function(){

if(alimentoSeleccionado){
alimentoSeleccionado.classList.remove("seleccionado");
alimentoSeleccionado = null;
}

});
