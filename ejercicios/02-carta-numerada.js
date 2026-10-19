// Ejercicio 02 - Carta numerada
function cartaNumerada(menu) {
  const lineas = [];
  for (let i = 0; i < menu.length; i++) {
    lineas.push(i + ". " + menu[i].nombre + " · $" + menu[i].precio);
  }
  return lineas;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { cartaNumerada };
