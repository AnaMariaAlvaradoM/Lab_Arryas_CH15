// Ejercicio 08 - Cerrar la mesa (integrador)

// Estas líneas traen tus funciones de los ejercicios 03, 05 y 07
const { soloDisponibles } = require("./03-solo-disponibles");
const { agregarAlPedido } = require("./05-agregar-al-pedido");
const { calcularCuenta } = require("./07-calcular-cuenta");

function cerrarMesa(menu, numeros) {
  const carta = soloDisponibles(menu);
  const pedido = [];
  for (let i = 0; i < numeros.length; i++) {
    agregarAlPedido(pedido, carta, numeros[i]);
  }
  return {
    cantidadPlatos: pedido.length,
    total: calcularCuenta(pedido),
  };
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { cerrarMesa };
