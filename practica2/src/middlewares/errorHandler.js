const notFound = (req, res, next) => {
  res.status(404).json({ error: `Ruta ${req.originalUrl} no encontrada` });
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
};

module.exports = { notFound, errorHandler };
