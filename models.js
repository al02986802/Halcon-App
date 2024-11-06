// models/models.js

const mongoose = require('mongoose');

// Esquema para Cliente
const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    datos_fiscales: { type: String, required: true }
});

// Esquema para EstadoPedido
const estadoPedidoSchema = new mongoose.Schema({
    descripcion: { type: String, required: true }
});

// Esquema para Pedido
const pedidoSchema = new mongoose.Schema({
    numero_factura: { type: String, required: true },
    estado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'EstadoPedido' },
    fecha_hora: { type: Date, default: Date.now },
    cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }
});

// Esquema para Usuario
const usuarioSchema = new mongoose.Schema({
    nombre_usuario: { type: String, required: true },
    rol_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rol' }
});

// Esquema para Rol
const rolSchema = new mongoose.Schema({
    nombre_rol: { type: String, required: true }
});

// Modelos
const Cliente = mongoose.model('Cliente', clienteSchema);
const EstadoPedido = mongoose.model('EstadoPedido', estadoPedidoSchema);
const Pedido = mongoose.model('Pedido', pedidoSchema);
const Usuario = mongoose.model('Usuario', usuarioSchema);
const Rol = mongoose.model('Rol', rolSchema);

// Exportar modelos
module.exports = {
    Cliente,
    EstadoPedido,
    Pedido,
    Usuario,
    Rol
};