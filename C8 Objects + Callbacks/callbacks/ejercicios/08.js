const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    // Verificar si el callback devuelve true para el elemento actual
    if (callback(array[i])) {
      // Si el elemento cumple con la condición, devolverlo
      return array[i];
    }
  }

  // Si no se encuentra ningún elemento que cumpla con la condición, devolver el mensaje de error
  return "No se encontró el elemento";
};

module.exports = buscarElemento;
