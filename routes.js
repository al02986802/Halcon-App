// routes/routes.js

const express = require('express');
const router = express.Router();
const { crearPedido, actualizarPedido, eliminarPedido } = require('../controllers/controllers');

// Rutas para pedidos
router.post('/pedidos', crearPedido);
router.put('/pedidos/:id', actualizarPedido);
router.delete('/pedidos/:id', eliminarPedido);

// Rutas para vistas (puedes agregar más según sea necesario)
router.get('/', (req, res) => res.render('index'));
router.get('/usuarios', (req, res) => {
    // Lógica para obtener usuarios y renderizar la vista correspondiente
});
router.get('/ordenes', (req, res) => {
    // Lógica para obtener órdenes y renderizar la vista correspondiente
});

module.exports = router;