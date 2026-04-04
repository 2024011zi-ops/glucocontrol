const alimentos = [
{
nombre: "manzana",
grupo: "Frutas",
porcion: "1 pieza",
cho: "15 g",
proteina: "0 g",
grasa: "0 g"
},
{
nombre: "arroz integral",
grupo: "Cereales",
porcion: "1/2 taza",
cho: "15 g",
proteina: "2 g",
grasa: "1 g"
},
{
nombre: "pechuga",
grupo: "Proteínas",
porcion: "30 g",
cho: "0 g",
proteina: "7 g",
grasa: "2 g"
},
{
nombre: "yogurt",
grupo: "Lácteos",
porcion: "1 taza",
cho: "12 g",
proteina: "8 g",
grasa: "2 g"
},
{
nombre: "pan dulce",
grupo: "Azúcares",
porcion: "1 pieza",
cho: "30 g",
proteina: "3 g",
grasa: "10 g"
}
];


function buscarAlimento(){

let input = document.getElementById("busqueda").value.toLowerCase();

let resultado = document.getElementById("resultado");

let encontrado = alimentos.find(alimento =>
alimento.nombre.includes(input)
);

if(encontrado){

resultado.innerHTML = `
<h3>${encontrado.nombre}</h3>
<p><strong>Grupo:</strong> ${encontrado.grupo}</p>
<p><strong>Porción:</strong> ${encontrado.porcion}</p>
<p><strong>CHO:</strong> ${encontrado.cho}</p>
<p><strong>Proteína:</strong> ${encontrado.proteina}</p>
<p><strong>Grasa:</strong> ${encontrado.grasa}</p>
`;

}else{

resultado.innerHTML = "Alimento no encontrado";

}

}
