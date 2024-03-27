// Función para generar el HTML como una cadena de texto
function generarHTML(numImagenesPorPagina) {
  var htmlString = '';

  // Calcular el número total de páginas necesarias
  var numTotalPaginas = Math.ceil(16 / numImagenesPorPagina);

  // Asegurarse de que el número total de páginas sea par
  if (numTotalPaginas % 2 !== 0) {
      numTotalPaginas++; // Si no es par, aumentamos en uno para hacerlo par
  }

  // Bucle para crear las páginas
  for (var i = 0; i < numTotalPaginas; i++) {
      // Agregar el inicio del div de página
      htmlString += '<div class="page">';
      // Agregar el inicio del div de contenido de página con el evento onclick
      htmlString += '<div class="page-content" id="pageContent" onclick="handlePageClick()">';

      // Bucle para crear las imágenes dentro de cada página
      for (var j = 1; j <= numImagenesPorPagina; j++) {
          var imagenIndex = i * numImagenesPorPagina + j;
          // Verificar si la imagenIndex supera el total de imágenes
          if (imagenIndex > 16) break;
          // Agregar la etiqueta de imagen con el src correspondiente y el evento onclick
          htmlString += '<img src="' + imagenIndex + '.png" id="' + imagenIndex + '" onclick="foto(event)"/>';
      }

      // Agregar el cierre del div de contenido de página y el cierre del div de página
      htmlString += '</div></div>';
  }
  window.alert(htmlString);

  // Devolver la cadena HTML generada
  return htmlString;
}

// Obtener el elemento donde se insertará el HTML generado
var contenedor = document.getElementById('pages');

// Obtener la cantidad de imágenes por página deseada
var numImagenesPorPagina = 6; // Por ejemplo, puedes cambiar este valor a la cantidad deseada

// Insertar el HTML generado en el contenedor
//contenedor.innerHTML = generarHTML(numImagenesPorPagina);

