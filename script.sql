CREATE TABLE TIPOS(
    Tipo VARCHAR(50) PRIMARY KEY,
    EficazContra VARCHAR(100),
    MuyDebilA VARCHAR(100),
    EstandarContra VARCHAR(100),
    VulnerableA VARCHAR(100),
    InmuneA VARCHAR(50)
);


INSERT INTO TIPOS(Tipo, EficazContra, MuyDebilA, EstandarContra, VulnerableA, InmuneA) VALUES 
('Acero', 'Hada, Hielo, Roca', 'Acero, Agua, Electrico, Fuego', 'Acero, Bicho, Dragon, Hada, Hielo, Normal, Planta, Psiquico, Roca, Veneno, Volador', 'Fuego, Lucha, Tierra', 'Veneno'),
('Agua', 'Fuego, Roca, Tierra', 'Agua, Dragon, Planta', 'Acero, Agua, Fuego, Hielo', 'Electrico, Planta', 'Ninguno'),
('Bicho', 'Planta, Psiquico, Siniestro', 'Acero, Fantasma, Fuego, Hada, Lucha, Volador, Veneno', 'Lucha, Planta, Tierra', 'Fuego, Roca, Volador', 'Ninguno'),
('Dragon', 'Dragon', 'Acero, Hada', 'Agua, Fuego, Electrico, Planta', 'Dragon, Hada, Hielo', 'Ninguno'),
('Electrico', 'Agua, Volador', 'Dragon, Electrico, Planta, Tierra', 'Acero, Electrico, Volador', 'Tierra', 'Ninguno'),
('Fantasma', 'Fantasma, Volador', 'Normal, Siniestro', 'Bicho, Lucha, Normal, Siniestro', 'Fantasma, Siniestro', 'Lucha, Normal'),
('Fuego', 'Acero, Bicho, Hielo, Planta', 'Agua, Dragon, Fuego, Roca', 'Acero, Bicho, Fuego, Hielo, Planta', 'Agua, Roca, Tierra', 'Ninguno'),
('Hada', 'Dragon, Lucha, Siniestro', 'Acero, Fuego, Veneno', 'Bicho, Dragon, Lucha, Siniestro', 'Acero, Siniestro', 'Dragon'),
('Hielo', 'Dragon, Planta, Tierra, Volador', 'Acero, Agua, Fuego, Hielo', 'Hielo', 'Acero, Fuego, Lucha, Roca', 'Ninguno'),
('Lucha', 'Normal', 'Bicho, Fantasma, Hada, Psiquico, Veneno, Volador', 'Bicho, Siniestro, Volador', 'Hada, Psiquico, Volador', 'Fantasma'),
('Normal', 'Ninguno', 'Acero, Fantasma, Roca', 'Fantasma', 'Lucha', 'Fantasma'),
('Planta', 'Agua, Roca, Tierra', 'Acero, Bicho, Dragon, Fuego, Planta, Veneno, Volador', 'Agua, Electrico, Planta, Tierra', 'Bicho, Fuego, Hielo, Veneno, Volador', 'Ninguno'),
('Psiquico', 'Lucha, Veneno', 'Acero, Psiquico, Siniestro', 'Lucha, Psiquico', 'Bicho, Fantasma, Siniestro', 'Siniestro'),
('Roca', 'Bicho, Fuego, Hielo, Volador', 'Acero, Lucha, Tierra', 'Fuego, Normal, Veneno, Volador', 'Acero, Agua, Lucha, Planta, Tierra', 'Ninguno'),
('Siniestro', 'Fantasma, Psiquico', 'Hada, Lucha, Siniestro', 'Fantasma, Psiquico, Siniestro', 'Bicho, Hada, Lucha', 'Ninguno'),
('Tierra', 'Acero, Electrico, Fuego, Roca, Veneno', 'Bicho, Planta, Volador', 'Electrico, Roca, Veneno', 'Agua, Hielo, Planta', 'Electrico'),
('Veneno', 'Hada, Planta', 'Acero, Fantasma, Roca, Tierra, Veneno', 'Hada, Planta, Veneno', 'Psiquico, Tierra', 'Ninguno'),
('Volador', 'Bicho, Lucha, Planta', 'Acero, Electrico, Roca', 'Lucha, Planta, Tierra', 'Electrico, Hielo, Roca', 'Tierra');


