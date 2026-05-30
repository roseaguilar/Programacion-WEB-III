// ============================================
// EJERCICIO 3 — GET /categorias/:id
// Devolver la categoría con el ID especificado
// e incluir todos los productos que le pertenecen
// ============================================

const pool = require('../config/database');

const ejercicio3_obtenerCategoriaPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const [categorias] = await pool.query(
      'SELECT * FROM categorias WHERE id = ?',
      [id]
    );

    if (categorias.length === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    const [productos] = await pool.query(
      'SELECT * FROM productos WHERE categoriaId = ?',
      [id]
    );

    const categoria = categorias[0];
    categoria.productos = productos;

    res.status(200).json(categoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

module.exports = { ejercicio3_obtenerCategoriaPorId };
