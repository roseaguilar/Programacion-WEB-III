const express = require('express');
const router = express.Router();

const { ejercicio1_crearCategoria }        = require('../controllers/ejercicio1');
const { ejercicio2_obtenerCategorias }     = require('../controllers/ejercicio2');
const { ejercicio3_obtenerCategoriaPorId } = require('../controllers/ejercicio3');
const { ejercicio4_actualizarCategoria }   = require('../controllers/ejercicio4');
const { ejercicio5_eliminarCategoria }     = require('../controllers/ejercicio5');

router.post('/',     ejercicio1_crearCategoria);

router.get('/',      ejercicio2_obtenerCategorias);

router.get('/:id',   ejercicio3_obtenerCategoriaPorId);

router.patch('/:id', ejercicio4_actualizarCategoria);

router.delete('/:id', ejercicio5_eliminarCategoria);

module.exports = router;
