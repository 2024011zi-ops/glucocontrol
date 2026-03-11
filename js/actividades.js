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

let nombreImagen = alimentoSeleccionado.src;


/* alimentos saludables */

let saludables = [
"manzana",
"arroz_integral",
"pechuga",
"yogurt"
];


/* alimentos no saludables */

let noSaludables = [
"galletas",
"pan_dulce",
"papas_fritas",
"refresco"
];


let correcto = false;


if(tipo === "saludable"){

correcto = saludables.some(alimento =>
nombreImagen.includes(alimento)
);

}

if(tipo === "no_saludable"){

correcto = noSaludables.some(alimento =>
nombreImagen.includes(alimento)
);

}


let resultado = document.getElementById("resultado");


if(correcto){

resultado.textContent = "✔ Correcto";
resultado.style.color = "green";

}else{

resultado.textContent = "✖ Incorrecto";
resultado.style.color = "red";

}

}
