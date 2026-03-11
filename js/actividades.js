let alimentoSeleccionado = null;

const alimentos = document.querySelectorAll(".alimento");

alimentos.forEach(alimento => {

alimento.addEventListener("click", () => {

if(alimentoSeleccionado === alimento){

alimento.classList.remove("seleccionado");
alimentoSeleccionado = null;
return;

}

if(alimentoSeleccionado){
alimentoSeleccionado.classList.remove("seleccionado");
}

alimento.classList.add("seleccionado");
alimentoSeleccionado = alimento;

});

});

function clasificar(tipo){

if(!alimentoSeleccionado){

document.addEventListener("DOMContentLoaded", function(){

let alimentoSeleccionado = null;

const alimentos = document.querySelectorAll(".alimento");

alimentos.forEach(function(alimento){

alimento.addEventListener("click", function(){

if(alimentoSeleccionado === this){

this.classList.remove("seleccionado");
alimentoSeleccionado = null;
return;

}

if(alimentoSeleccionado){
alimentoSeleccionado.classList.remove("seleccionado");
}

this.classList.add("seleccionado");
alimentoSeleccionado = this;

});

});

window.clasificar = function(tipo){

if(!alimentoSeleccionado){

document.getElementById("resultado").textContent =
"Primero selecciona un alimento.";

return;

}

if(tipo === "saludable"){

alimentoSeleccionado.style.border = "4px solid green";

document.getElementById("resultado").textContent =
"Clasificaste el alimento como saludable.";

}

if(tipo === "no_saludable"){

alimentoSeleccionado.style.border = "4px solid red";

document.getElementById("resultado").textContent =
"Clasificaste el alimento como no saludable.";

}

}

});
