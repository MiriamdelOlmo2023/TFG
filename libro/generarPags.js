// function generateImages() {
//   const totalImages = 16;
//   const imagesPerPage = 4;
//   const totalPages = Math.ceil(totalImages / imagesPerPage);

//   const containers = document.getElementsByClassName("pages");

//   Array.from(containers).forEach(container => {
//     let imageIndex = 1;

//     for (let page = 1; page <= totalPages; page++) {
//       // Crear div.page y div.page-content
//       const pageDiv = document.createElement("div");
//       pageDiv.classList.add("page");
//       const pageContentDiv = document.createElement("div");
//       pageContentDiv.classList.add("page-content");
//       pageContentDiv.setAttribute("onclick", "handlePageClick()");

//       // Agregar imágenes a la página actual
//       for (let i = 1; i <= imagesPerPage; i++) {
//         // Crear imagen y configurar atributos
//         const img = document.createElement("img");
//         img.src = `${imageIndex}.png`;
//         img.id = imageIndex;
//         img.onclick = foto; // Asignar el manejador de evento

//         // Agregar imagen al div de contenido de la página
//         pageContentDiv.appendChild(img);

//         imageIndex++;
//         if (imageIndex > totalImages) break; // Salir del bucle si ya no hay más imágenes
//       }

//       // Agregar div.page-content al div.page y luego agregar la página al contenedor
//       pageDiv.appendChild(pageContentDiv);
//       container.appendChild(pageDiv);
//     }
//   });
// }

// generateImages();



// // Función para generar el HTML de las páginas con las imágenes
// function generarPaginas(numPaginas, imagenesPorPagina) {
//   let html = '';
//   let imgCounter = 1; // Contador para asignar el ID de las imágenes
//   const totalPaginas = numPaginas % 2 === 0 ? numPaginas : numPaginas + 1; // Asegurar un número par de páginas

//   for (let i = 0; i < totalPaginas; i++) {
//     const zIndex = i === 0 ? totalPaginas - i : totalPaginas - i * 2; // Ajustar el zIndex para que la página se coloque correctamente
//     html += '<div class="page" style="z-index: ' + zIndex + ';">';
//     html += '<div class="page-content" id="pageContent" onclick="handlePageClick()">';
//     for (let j = 0; j < imagenesPorPagina; j++) {
//       html += '<img src="' + imgCounter + '.png" id="' + imgCounter + '" class="page-image"/>';
//       imgCounter++;
//     }
//     html += '</div>';
//     html += '</div>';
//   }
//   return html;
// }

// // Llamar a la función para generar el HTML de las páginas
// const numPaginas = 5; // Cambia este valor según la cantidad de páginas que necesites
// const imagenesPorPagina = 4; // Cambia este valor según la cantidad de imágenes por página que necesites
// const contenedorPaginas = document.getElementById('contenedorPaginas'); // Asegúrate de tener un elemento con el id 'contenedorPaginas' donde colocar las páginas

// contenedorPaginas.innerHTML = generarPaginas(numPaginas, imagenesPorPagina);





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

