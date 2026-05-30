// ============================================
// EJERCICIO 5 — DELETE /categorias/:id
// Eliminar la categoría indicada y al mismo
// tiempo eliminar automáticamente todos los
// productos que pertenecen a esa categoría
// ============================================

const pool = require('../config/database');

const ejercicio5_eliminarCategoria = async (req, res) => {
  try {
    const { id } = req.params;

    const [existe] = await pool.query(
      'SELECT * FROM categorias WHERE id = ?',
      [id]
    );

    if (existe.length === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    await pool.query(
      'DELETE FROM productos WHERE categoriaId = ?',
      [id]
    );

    await pool.query(
      'DELETE FROM categorias WHERE id = ?',
      [id]
    );

    res.status(200).json({
      message: `Categoría con ID ${id} y sus productos eliminados correctamente`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la categoría' });
  }
};

module.exports = { ejercicio5_eliminarCategoria };
