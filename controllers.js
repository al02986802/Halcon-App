// controllers/controllers.js

const { Cliente, Pedido, Usuario, EstadoPedido } = require('../models/models');

// Crear un nuevo pedido
exports.crearPedido = async (req, res) => {
    try {
        const nuevoPedido = new Pedido(req.body);
        await nuevoPedido.save();
        res.status(201).json({ mensaje: 'Pedido creado exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un pedido existente
exports.actualizarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });
        res.json({ mensaje: 'Pedido actualizado exitosamente', pedido });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un pedido lógicamente
exports.eliminarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, { estado_id: null }, { new: true });
        if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });
        res.json({ mensaje: 'Pedido eliminado lógicamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};