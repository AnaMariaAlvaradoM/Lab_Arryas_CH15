// Ejercicio 05 - Agregar al pedido
function agregarAlPedido(pedido, carta, numero) {
  const plato = carta[numero];
  if (plato === undefined) {
    return "Ese número no está en la carta";
  }
  pedido.push(plato);
  return "Agregado: " + plato.nombre;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { agregarAlPedido };
