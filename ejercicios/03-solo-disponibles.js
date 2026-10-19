// Ejercicio 03 - Solo los platos disponibles
function soloDisponibles(menu) {
  const carta = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].disponible === true) {
      carta.push(menu[i]);
    }
  }
  return carta;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { soloDisponibles };
