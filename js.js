var pages = document.getElementsByClassName('page');
for(var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = (pages.length - i);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  for(var i = 0; i < pages.length; i++) {
    pages[i].pageNum = i + 1;
    pages[i].onclick = function(event) {
      if (!event.stopPropagation) {
        return;
      }
      event.stopPropagation();
      if (this.pageNum % 2 === 0) {
        this.classList.remove('flipped');
        this.previousElementSibling.classList.remove('flipped');
      } else {
        this.classList.add('flipped');
        this.nextElementSibling.classList.add('flipped');
      }
    }
  }
});


function handlePageClick() {
  if (!event.stopPropagation) {
    return;
  }
  event.stopPropagation();
}

function casillaSeleccionada(event) {
  var casillaId = event.target.id;
  var casilla = document.getElementById(casillaId);
  
  var elementosSeleccionados = document.querySelectorAll('.selectedCasilla');
  elementosSeleccionados.forEach(function(elemento) {
    elemento.classList.remove('selectedCasilla');
  });
  
  casilla.classList.add('selectedCasilla');
}
