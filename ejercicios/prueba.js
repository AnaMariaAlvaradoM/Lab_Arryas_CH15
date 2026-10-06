const { soloDisponibles } = require("./03-solo-disponibles.js");

const menu = [
    { nombre: "Bandeja paisa", precio: 32000, disponible: true },
    { nombre: "Ajiaco", precio: 28000, disponible: false },
    { nombre: "Limonada de coco", precio: 12000, disponible: true },
    { nombre: "Sancocho", precio: 25000, disponible: true }
];

const resultado = soloDisponibles(menu);

console.log(resultado);

console.log("Menú original:");
console.log(menu);

console.log("Solo disponibles:");
console.log(resultado);