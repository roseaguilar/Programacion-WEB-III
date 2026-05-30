const express = require('express');
const dotenv  = require('dotenv');
const categoriasRoutes = require('./routes/categoriasRoutes');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/categorias', categoriasRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API de Categorías funcionando' });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
