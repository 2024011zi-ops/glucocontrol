let alimentoSeleccionado = null;

document.querySelectorAll(".alimento").forEach(function(alimento){

alimento.onclick = function(){

if(alimentoSeleccionado){
alimentoSeleccionado.style.border = "none";
}

this.style.border = "4px solid blue";

alimentoSeleccionado = this;

};

});

function clasificar(tipo){

if(!alimentoSeleccionado){

document.getElementById("resultado").textContent =
"Selecciona primero un alimento.";

return;

}

if(tipo === "saludable"){

alimentoSeleccionado.style.border = "4px solid green";

document.getElementById("resultado").textContent =
"Clasificado como saludable.";

}

if(tipo === "no_saludable"){

alimentoSeleccionado.style.border = "4px solid red";

document.getElementById("resultado").textContent =
"Clasificado como no saludable.";

}

}
