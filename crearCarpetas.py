import os

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


# Directorio base donde se crearán las carpetas
directorio_base = 'C:/ruta/a/tu/directorio/base'  # Cambia esto por la ruta deseada

# Crear una carpeta por cada Pokémon
for pokemon in pokemones:
    # Ruta completa de la carpeta del Pokémon
    ruta_carpeta_pokemon = os.path.join(directorio_base, pokemon)
    
    # Verificar si la carpeta no existe y crearla
    if not os.path.exists(ruta_carpeta_pokemon):
        os.makedirs(ruta_carpeta_pokemon)
        print(f'Se ha creado la carpeta para {pokemon}')
    else:
        print(f'La carpeta para {pokemon} ya existe')
