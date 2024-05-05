function generateImages() {
  const totalImages = 151;
  const imagesPerPage = 16;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const containers = document.getElementsByClassName("pages");


  document.addEventListener("DOMContentLoaded", function() {
    const shinyCheckbox = document.getElementById("shinyCheckbox");
  
    shinyCheckbox.addEventListener("change", function() {
      const isChecked = shinyCheckbox.checked;
      localStorage.setItem("shinyCheckboxState", isChecked);
    });
  });


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
        img.src = `src/cromos/${imageIndex}.png`;
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
    
    if (containers.length % 2 !== 0) {
      const pageDiv = document.createElement("div");
      pageDiv.classList.add("page");
      const pageContentDiv = document.createElement("div");
      pageContentDiv.classList.add("page-content");
      pageContentDiv.setAttribute("onclick", "handlePageClick()");
      pageDiv.appendChild(pageContentDiv);
      container.appendChild(pageDiv);
    }
  });
}

generateImages();



function foto(event) {
  var imageId = event.target.id;
  var seleccionado = document.querySelector('.selectedCasilla');

  if (Object.values(equipo).includes(pokedex[imageId])) {
    window.alert("¡Este Pokémon ya está seleccionado en tu equipo!");
    return;
  }

  function agregarImagen(div) {
    var imagenExistente = div.querySelector('img');

    if (imagenExistente) {
      imagenExistente.src = 'src/'+pokedex[imageId]+'/200px-'+pokedex[imageId]+'.png';
    } else {
      var imagen = document.createElement('img');
      imagen.src = 'src/'+pokedex[imageId]+'/200px-'+pokedex[imageId]+'.png';
      imagen.height = 130;
      imagen.style.marginLeft = "35px";
      imagen.style.pointerEvents = "none";
      imagen.style.marginTop = "7px";
      
      div.appendChild(imagen);
    }

    equipo[div.id] = pokedex[imageId];
  }

  //Si ya hay una casilla seleccionada
  if (seleccionado) {
    agregarImagen(seleccionado);
  } else {
    var primerDiv = document.getElementById("1"); //primera casilla por defecto
    if (primerDiv) {
      agregarImagen(primerDiv);
    }
  }
}

function combatir() {
  if (Object.values(equipo).filter(nombre => nombre !== "").length !== 6) {
    window.alert("¡Debes tener 6 Pokémon en tu equipo!");
    return;
  } else {
    localStorage.setItem('equipo', JSON.stringify(equipo));
    const shinyCheckboxState = localStorage.getItem("shinyCheckboxState");
    window.location.href = "combate.html";
  }
}


var equipo = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
}


var pokedex = {
  1: "bulbasaur",
  2: "ivysaur",
  3: "venusaur",
  4: "charmander",
  5: "charmeleon",
  6: "charizard",
  7: "squirtle",
  8: "wartortle",
  9: "blastoise",
  10: "caterpie",
  11: "metapod",
  12: "butterfree",
  13: "weedle",
  14: "kakuna",
  15: "beedrill",
  16: "pidgey",
  17: "pidgeotto",
  18: "pidgeot",
  19: "rattata",
  20: "raticate",
  21: "spearow",
  22: "fearow",
  23: "ekans",
  24: "arbok",
  25: "pikachu",
  26: "raichu",
  27: "sandshrew",
  28: "sandslash",
  29: "nidoran_hembra",
  30: "nidorina",
  31: "nidoqueen",
  32: "nidoran_macho",
  33: "nidorino",
  34: "nidoking",
  35: "clefairy",
  36: "clefable",
  37: "vulpix",
  38: "ninetales",
  39: "jigglypuff",
  40: "wigglytuff",
  41: "zubat",
  42: "golbat",
  43: "oddish",
  44: "gloom",
  45: "vileplume",
  46: "paras",
  47: "parasect",
  48: "venonat",
  49: "venomoth",
  50: "diglett",
  51: "dugtrio",
  52: "meowth",
  53: "persian",
  54: "psyduck",
  55: "golduck",
  56: "mankey",
  57: "primeape",
  58: "growlithe",
  59: "arcanine",
  60: "poliwag",
  61: "poliwhirl",
  62: "poliwrath",
  63: "abra",
  64: "kadabra",
  65: "alakazam",
  66: "machop",
  67: "machoke",
  68: "machamp",
  69: "bellsprout",
  70: "weepinbell",
  71: "victreebel",
  72: "tentacool",
  73: "tentacruel",
  74: "geodude",
  75: "graveler",
  76: "golem",
  77: "ponyta",
  78: "rapidash",
  79: "slowpoke",
  80: "slowbro",
  81: "magnemite",
  82: "magneton",
  83: "farfetchd",
  84: "doduo",
  85: "dodrio",
  86: "seel",
  87: "dewgong",
  88: "grimer",
  89: "muk",
  90: "shellder",
  91: "cloyster",
  92: "gastly",
  93: "haunter",
  94: "gengar",
  95: "onix",
  96: "drowzee",
  97: "hypno",
  98: "krabby",
  99: "kingler",
  100: "voltorb",
  101: "electrode",
  102: "exeggcute",
  103: "exeggutor",
  104: "cubone",
  105: "marowak",
  106: "hitmonlee",
  107: "hitmonchan",
  108: "lickitung",
  109: "koffing",
  110: "weezing",
  111: "rhyhorn",
  112: "rhydon",
  113: "chansey",
  114: "tangela",
  115: "kangaskhan",
  116: "horsea",
  117: "seadra",
  118: "goldeen",
  119: "seaking",
  120: "staryu",
  121: "starmie",
  122: "mrmime",
  123: "scyther",
  124: "jynx",
  125: "electabuzz",
  126: "magmar",
  127: "pinsir",
  128: "tauros",
  129: "magikarp",
  130: "gyarados",
  131: "lapras",
  132: "ditto",
  133: "eevee",
  134: "vaporeon",
  135: "jolteon",
  136: "flareon",
  137: "porygon",
  138: "omanyte",
  139: "omastar",
  140: "kabuto",
  141: "kabutops",
  142: "aerodactyl",
  143: "snorlax",
  144: "articuno",
  145: "zapdos",
  146: "moltres",
  147: "dratini",
  148: "dragonair",
  149: "dragonite",
  150: "mewtwo",
  151: "mew"
 };
 