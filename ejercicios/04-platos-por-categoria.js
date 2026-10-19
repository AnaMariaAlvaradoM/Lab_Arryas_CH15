// Ejercicio 04 - Platos por categoría
function platosPorCategoria(menu, categoria) {
  const resultado = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].categoria === categoria) {
      resultado.push(menu[i]);
    }
  }
  return resultado;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { platosPorCategoria };
