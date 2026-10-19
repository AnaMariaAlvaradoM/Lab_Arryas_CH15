// Ejercicio 07 - Calcular la cuenta con IVA
function calcularCuenta(pedido) {
  let subtotal = 0;
  for (let i = 0; i < pedido.length; i++) {
    subtotal = subtotal + pedido[i].precio;
  }
  const iva = subtotal * 0.19;
  return Math.round(subtotal + iva);
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { calcularCuenta };
