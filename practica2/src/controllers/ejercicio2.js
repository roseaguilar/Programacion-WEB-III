// ============================================
// EJERCICIO 2 — GET /categorias
// Devolver todas las categorías registradas
// en la base de datos
// ============================================

const pool = require('../config/database');

const ejercicio2_obtenerCategorias = async (req, res) => {
  try {
    const [categorias] = await pool.query(
      'SELECT * FROM categorias ORDER BY createdAt DESC'
    );

    res.status(200).json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};

module.exports = { ejercicio2_obtenerCategorias };
