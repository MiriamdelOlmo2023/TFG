function generateImages() {
  const totalImages = 105;
  const imagesPerPage = 16;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const containers = document.getElementsByClassName("pages");

  Array.from(containers).forEach(container => {
    let imageIndex = 1;

    for (let page = 1; page <= totalPages; page++) {
      // Crear div.page y div.page-content
      const pageDiv = document.createElement("div");
      pageDiv.classList.add("page");
      const pageContentDiv = document.createElement("div");
      pageContentDiv.classList.add("page-content");
      pageContentDiv.setAttribute("onclick", "handlePageClick()");

      // Agregar imágenes a la página actual
      for (let i = 1; i <= imagesPerPage; i++) {
        // Crear imagen y configurar atributos
        const img = document.createElement("img");
        img.src = `../cromos/${imageIndex}.png`;
        img.id = imageIndex;
        img.classList.add("cromo");
        img.onclick = foto;

        // Agregar imagen al div de contenido de la página
        pageContentDiv.appendChild(img);

        imageIndex++;
        if (imageIndex > totalImages) break; // Salir del bucle si ya no hay más imágenes
      }

      // Agregar div.page-content al div.page y luego agregar la página al contenedor
      pageDiv.appendChild(pageContentDiv);
      container.appendChild(pageDiv);
    }
  });
}

generateImages();



function foto(event) {
    var imageId = event.target.id;
    window.alert("ID de la imagen: " + imageId);
}