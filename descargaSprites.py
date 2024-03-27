import requests
from bs4 import BeautifulSoup
import os

def descargar_imagenes_pokemon(pokemon):
    # URL de la página que contiene los archivos de imágenes
    url_pagina = f'https://www.wikidex.net/wiki/{pokemon}'

    # Directorio donde se guardarán las imágenes descargadas
    directorio_destino = 'media/descargas'

    # Crear el directorio si no existe
    if not os.path.exists(directorio_destino):
        os.makedirs(directorio_destino)

    # Nombres de los archivos que buscamos
    nombres_archivos = [
        f'px-{pokemon}.png',
        f'{pokemon}_NB.gif',
        f'{pokemon}_NB_variocolor.gif',
        f'{pokemon}_espalda_G5.gif',
        f'{pokemon}_espalda_G5_variocolor.gif'
    ]

    # Realizar la solicitud GET a la página
    try:
        response = requests.get(url_pagina)
        response.raise_for_status()  # Lanzar una excepción si hay un error en la solicitud
    except requests.exceptions.RequestException as e:
        print(f'Error al obtener la página de {pokemon}: {e}')
        return

    soup = BeautifulSoup(response.content, 'html.parser')

    # Buscar las etiquetas <img> con los src que terminen con los nombres de archivos buscados
    for img_tag in soup.find_all('img'):
        src = img_tag.get('src')
        if src is not None and any(src.endswith(nombre_archivo) for nombre_archivo in nombres_archivos):
            # Construir la URL completa
            if src.startswith('https:'):
                url_imagen = src
            else:
                url_imagen = 'https://www.wikidex.net' + src

            # Descargar el archivo
            nombre_archivo = src.split('/')[-1]  # Obtener el nombre del archivo de la URL
            ruta_archivo = os.path.join(directorio_destino, nombre_archivo)
            if not os.path.exists(ruta_archivo):
                try:
                    response_archivo = requests.get(url_imagen)
                    response_archivo.raise_for_status()  # Lanzar una excepción si hay un error en la solicitud
                    with open(ruta_archivo, 'wb') as archivo:
                        archivo.write(response_archivo.content)
                    print(f'Se ha descargado la imagen de {pokemon}: {ruta_archivo}')
                except requests.exceptions.RequestException as e:
                    print(f'Error al descargar la imagen de {pokemon}: {e}')
            else:
                print(f'El archivo de {pokemon} ya existe: {ruta_archivo}')

# Ejemplo de uso
# Lista de nombres de Pokémon
pokemones = [
    'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout',
    'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude',
    'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro',
    'Magnemite', 'Magneton', 'Farfetch’d', 'Doduo', 'Dodrio', 'Seel',
    'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly',
    'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler',
    'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak',
    'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn',
    'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra',
    'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther',
    'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp',
    'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon',
    'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops',
    'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini',
    'Dragonair', 'Dragonite', 'Mewtwo', 'Mew'
]

# Iterar sobre cada Pokémon y descargar las imágenes
for pokemon in pokemones:
    descargar_imagenes_pokemon(pokemon)
