// ============================================
// EJERCICIO 4 — PATCH /categorias/:id
// Actualizar todos los datos de la categoría
// con el ID especificado
// ============================================

const pool = require('../config/database');

const ejercicio4_actualizarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    const [existe] = await pool.query(
      'SELECT * FROM categorias WHERE id = ?',
      [id]
    );

    if (existe.length === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    const campos = [];
    const valores = [];

    if (nombre !== undefined) {
      campos.push('nombre = ?');
      valores.push(nombre);
    }
    if (descripcion !== undefined) {
      campos.push('descripcion = ?');
      valores.push(descripcion);
    }

    if (campos.length === 0) {
      return res.status(400).json({ error: 'No se enviaron campos para actualizar' });
    }

    valores.push(id);

    await pool.query(
      `UPDATE categorias SET ${campos.join(', ')} WHERE id = ?`,
      valores
    );

    const [actualizada] = await pool.query(
      'SELECT * FROM categorias WHERE id = ?',
      [id]
    );

    res.status(200).json({
      message: 'Categoría actualizada correctamente',
      categoria: actualizada[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la categoría' });
  }
};

module.exports = { ejercicio4_actualizarCategoria };
