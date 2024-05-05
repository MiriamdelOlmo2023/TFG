const equipo = JSON.parse(localStorage.getItem('equipo'));
const shiny = localStorage.getItem('shinyCheckboxState');

function mostrarEquipo() {
    agregarImagen(document.getElementById("p1"), 1);
    agregarImagen(document.getElementById("p2"), 2);
    agregarImagen(document.getElementById("p3"), 3);
    agregarImagen(document.getElementById("p4"), 4);
    agregarImagen(document.getElementById("p5"), 5);
    agregarImagen(document.getElementById("p6"), 6);
}

function agregarImagen(div, num) {
    var imagenExistente = div.querySelector('img');

    if (imagenExistente) {
      imagenExistente.src = 'src/'+equipo[num]+'/200px-'+equipo[num]+'.png';
    } else {
      var imagen = document.createElement('img');
      imagen.src = 'src/'+equipo[num]+'/200px-'+equipo[num]+'.png';
      imagen.height = 130;
      imagen.style.marginLeft = "35px";
      imagen.style.pointerEvents = "none";
      imagen.style.marginTop = "7px";
      div.appendChild(imagen);
    }
  }


mostrarEquipo();
