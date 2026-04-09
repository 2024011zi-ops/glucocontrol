document.getElementById("formAgenda").addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let telefono = document.getElementById("telefono").value;
let especialista = document.getElementById("especialista").value;
let fecha = document.getElementById("fecha").value;

let mensaje = `Hola, soy ${nombre}. Quiero agendar una consulta con ${especialista} el día ${fecha}. Mi número es ${telefono}.`;

let numeroEspecialista = "";

/* Asignar número según especialista */

if(especialista === "Bryan Soto"){
numeroEspecialista = "527152177010";
}

if(especialista === "Kasandra Reyes"){
numeroEspecialista = 527151463123
}

if(especialista === "Grettel Solis"){
numeroEspecialista = "527151120777";
}

if(especialista === "Fernanda Castro"){
numeroEspecialista = "527151356598";
}

/* Crear enlace de WhatsApp */

let url = `https://wa.me/${numeroEspecialista}?text=${encodeURIComponent(mensaje)}`;

/* Abrir WhatsApp */

window.open(url, "_blank");

/* Mensaje en pantalla */

document.getElementById("mensaje").textContent =
"✔ Redirigiendo a WhatsApp para confirmar la cita...";

this.reset();

});
