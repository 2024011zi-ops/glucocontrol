function abrirModal(nombre, especialidad, costo, telefono){

let modal = document.getElementById("modal");
let contenido = document.getElementById("modalContenido");

contenido.innerHTML =
"<h2>"+nombre+"</h2>" +
"<p><b>Especialidad:</b> "+especialidad+"</p>" +
"<p><b>Costo consulta:</b> "+costo+"</p>" +
"<p><b>Teléfono:</b> "+telefono+"</p>";

modal.style.display = "flex";

}

function cerrarModal(){
document.getElementById("modal").style.display="none";
}

window.onclick = function(event){

let modal = document.getElementById("modal");

if(event.target == modal){
modal.style.display = "none";
}

}
