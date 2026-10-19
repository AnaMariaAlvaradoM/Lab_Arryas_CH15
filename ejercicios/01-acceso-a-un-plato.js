// Ejercicio 01 - Acceso a un plato
function describirPlato(menu, posicion) {
  const plato = menu[posicion];
  if (plato === undefined) {
    return "Ese plato no existe";
  }
  return plato.nombre + " · $" + plato.precio;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { describirPlato };
