import os
import shutil

# Lista de nombres de los Pokémon
pokemones = [
    'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
    'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree',
    'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot',
    'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok',
    'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran_hembra', 'Nidorina',
    'Nidoqueen', 'Nidoran_macho', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable',
    'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat',
    'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth',
    'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey',
    'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath',
    'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout',
    'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler',
    'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton',
    'Farfetchd', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder',
    'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby',
    'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak',
    'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon',
    'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking',
    'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar',
    'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee',
    'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto',
    'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini',
    'Dragonair', 'Dragonite', 'Mewtwo', 'Mew'
]


# Carpeta donde se encuentran los archivos de los Pokémon a mover
carpeta_descargas = 'media/descargas'
# Carpeta donde se encuentran las carpetas de los Pokémon
carpeta_pokemones = 'media'

# Función para buscar archivos que contienen el nombre de un Pokémon y moverlos a una carpeta
def mover_archivos_por_pokemon(nombre_pokemon):
    # Carpeta donde se moverán los archivos del Pokémon
    carpeta_destino = os.path.join(carpeta_pokemones, nombre_pokemon)

    # Crear la carpeta de destino si no existe
    if not os.path.exists(carpeta_destino):
        os.makedirs(carpeta_destino)

    # Buscar archivos que contienen el nombre del Pokémon
    for archivo in os.listdir(carpeta_descargas):
        if nombre_pokemon in archivo:
            # Ruta completa del archivo de origen
            ruta_origen = os.path.join(carpeta_descargas, archivo)
            # Mover el archivo al directorio de destino
            shutil.move(ruta_origen, carpeta_destino)
            print(f'Se ha movido el archivo {archivo} a la carpeta {nombre_pokemon}')

# Llamar a la función para cada Pokémon en la lista
for pokemon in pokemones:
    mover_archivos_por_pokemon(pokemon)
