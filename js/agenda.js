document.getElementById("formAgenda").addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let especialista = document.getElementById("especialista").value;
let fecha = document.getElementById("fecha").value;

document.getElementById("mensaje").textContent =
"✅ Consulta agendada para " + nombre + " con " + especialista + " el día " + fecha;

this.reset();

});
