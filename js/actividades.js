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

function respuesta(esSaludable){

if(!alimentoSeleccionado){
document.getElementById("resultado").innerText = "Selecciona primero un alimento.";
return;
}

let nombre = alimentoSeleccionado.src;

let correctos = ["manzana","arroz_integral","pechuga","yogurt"];

let esCorrecto = correctos.some(alimento => nombre.includes(alimento));

if(esSaludable === esCorrecto){
document.getElementById("resultado").innerText = "Correcto ✔";
}else{
document.getElementById("resultado").innerText = "Incorrecto ✖";
}

}

document.addEventListener("click", function(e){

if(!e.target.classList.contains("alimento")){
if(alimentoSeleccionado){
alimentoSeleccionado.classList.remove("seleccionado");
alimentoSeleccionado = null;
}
}

});
