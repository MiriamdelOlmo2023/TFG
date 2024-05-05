document.addEventListener("DOMContentLoaded", function() {

    var dsArriba = document.getElementById("dsArriba");
    var playButton = document.getElementById("playButton");

    var pokeballVideo = document.getElementById("pokeballIzq");
    var pokeballCentroVideo = document.getElementById("pokeballCentro");
    var pokeballDerVideo = document.getElementById("pokeballDer");

    // Inicialmente ocultar el video de la pokeball
    // pokeballVideo.style.display = "none";

    // Detectar cuando el video de maletin termina
    dsArriba.addEventListener("ended", function() {
        // Mostrar el video de pokeballIzq después de que termine el video de maletin
        pokeballVideo.currentTime = 0.1;
        pokeballVideo.style.display = "block";
    });

    // Controlar la reproducción de la pokeball al pasar el ratón por encima
    pokeballVideo.addEventListener("mouseover", function() {
        pokeballVideo.currentTime = 0.1;
        pokeballVideo.play();
    });

    // Detener la reproducción de la pokeball al dejar de pasar el ratón por encima
    pokeballVideo.addEventListener("mouseout", function() {
        pokeballVideo.pause();
        pokeballVideo.currentTime = 0.1;
    });



    // Detectar cuando el video de pokeballcentro termina
    dsArriba.addEventListener("ended", function() {
        // Mostrar el video de pokeballCentro después de que termine el video de pokeballcentro
        pokeballCentroVideo.currentTime = 0.1;
        pokeballCentroVideo.style.display = "block";
    });

    // Controlar la reproducción de pokeballCentro al pasar el ratón por encima
    pokeballCentroVideo.addEventListener("mouseover", function() {
        pokeballCentroVideo.currentTime = 0.1;
        pokeballCentroVideo.play();
    });

    // Detener la reproducción de pokeballCentro al dejar de pasar el ratón por encima
    pokeballCentroVideo.addEventListener("mouseout", function() {
        pokeballCentroVideo.pause();
        pokeballCentroVideo.currentTime = 0.1;
    });



    // Detectar cuando el video de pokeballder termina
    dsArriba.addEventListener("ended", function() {
        // Mostrar el video de pokeballDer después de que termine el video de pokeballder
        pokeballDerVideo.currentTime = 0.1;
        pokeballDerVideo.style.display = "block";
    });

    // Controlar la reproducción de pokeballDer al pasar el ratón por encima
    pokeballDerVideo.addEventListener("mouseover", function() {
        pokeballDerVideo.currentTime = 0.1;
        pokeballDerVideo.play();
    });

    // Detener la reproducción de pokeballDer al dejar de pasar el ratón por encima
    pokeballDerVideo.addEventListener("mouseout", function() {
        pokeballDerVideo.pause();
        pokeballDerVideo.currentTime = 0.1;
    });


    // Controlar el video de maletin
    playButton.addEventListener("click", function() {
        if (dsArriba.paused) {
            dsArriba.play();
            playButton.textContent = "Pausar";
        } else {
            dsArriba.pause();
            playButton.textContent = "Reproducir";
        }
    });
});
