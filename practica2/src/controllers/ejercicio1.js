// ============================================
// EJERCICIO 1 — POST /categorias
// Registrar una nueva categoría enviando
// nombre y descripcion en el body
// ============================================

const pool = require('../config/database');

const ejercicio1_crearCategoria = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: 'El campo nombre es obligatorio' });
    }

    const [result] = await pool.query(
      'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
      [nombre, descripcion || null]
    );

    res.status(201).json({
      message: 'Categoría creada correctamente',
      id: result.insertId,
      nombre,
      descripcion: descripcion || null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la categoría' });
  }
};

module.exports = { ejercicio1_crearCategoria };
