// Ejercicio 06 - Cancelar el último plato
function cancelarUltimo(pedido) {
  if (pedido.length === 0) {
    return "El pedido está vacío";
  }
  const quitado = pedido.pop();
  return "Se canceló: " + quitado.nombre;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { cancelarUltimo };
