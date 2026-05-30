CREATE DATABASE IF NOT EXISTS categorias_db;
USE categorias_db;

CREATE TABLE IF NOT EXISTS categorias (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(100) NOT NULL,
  descripcion VARCHAR(255),
  createdAt   DATETIME NOT NULL DEFAULT current_timestamp(),
  updatedAt   DATETIME NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);

CREATE TABLE IF NOT EXISTS productos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(100) NOT NULL,
  precio      DECIMAL(10,2) NOT NULL,
  categoriaId INT NOT NULL,
  createdAt   DATETIME NOT NULL DEFAULT current_timestamp(),
  updatedAt   DATETIME NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  FOREIGN KEY (categoriaId) REFERENCES categorias(id)
);

INSERT INTO categorias (nombre, descripcion) VALUES
  ('Electrónica', 'Dispositivos electrónicos y gadgets'),
  ('Oficina', 'Material y accesorios de oficina');

INSERT INTO productos (nombre, precio, categoriaId) VALUES
  ('Laptop', 1200.00, 1),
  ('Auriculares', 45.00, 1),
  ('Silla ergonómica', 350.00, 2),
  ('Escritorio', 200.00, 2);
