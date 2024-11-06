// server.js

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost/halcon', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/', routes);

// Servir archivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});