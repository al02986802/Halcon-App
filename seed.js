// seed.js

const mongoose = require('mongoose');
const { Cliente, EstadoPedido } = require('./models/models');

// Conectar a MongoDB
mongoose.connect('mongodb://localhost/halcon', { useNewUrlParser: true, useUnifiedTopology: true });

async function seedData() {
    const cliente1 = new Cliente({ nombre: 'Cliente A', datos_fiscales: '123456789' });
    const cliente2 = new Cliente({ nombre: 'Cliente B', datos_fiscales: '987654321' });

    const estado1 = new EstadoPedido({ descripcion: 'Ordenado' });
    
    await cliente1.save();
    await cliente2.save();
    await estado1.save();

    console.log('Datos sembrados exitosamente');
}

seedData().then(() => {
    mongoose.connection.close();
}).catch(err => console.error(err));